import { apiClient } from "../../../services/apiClient";
import type { Contest, PaginatedResponse } from "./contests.types";

export interface ContestQueryParams {
  status?: number[];
  tournament_id?: string;
}

export const fetchContests = async (
  params?: ContestQueryParams
): Promise<PaginatedResponse<Contest>> => {
  const { data } = await apiClient.get("/v3/contests/", {
    params: {
      ...params,
      status: params?.status?.join(","),
    },
  });

  return data;
};
