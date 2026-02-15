import { apiClient } from "../../../services/apiClient";
import type { Program } from "./programs.types";

export interface ProgramsQueryParams {
  status?: number[];
  program_assignment_status?: "assigned" | "expired";
}

export interface ProgramsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Program[];
}

export const fetchPrograms = async (
  params?: ProgramsQueryParams
): Promise<ProgramsResponse> => {
  const query = new URLSearchParams();

  if (params?.status?.length) {
    query.append("status", params.status.join(","));
  }

  if (params?.program_assignment_status) {
    query.append(
      "program_assignment_status",
      params.program_assignment_status
    );
  }

  const { data } = await apiClient.get(
    `/v2/programs/?${query.toString()}`
  );

  return data;
};
