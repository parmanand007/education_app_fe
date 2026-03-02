import { apiClient } from "../../../services/apiClient";
import type { Contest, ContestQueryParams, PaginatedResponse, TournamentQueryParams, TournamentResponse, WalletLevel } from "./contests.types";

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

export const fetchTournaments = async (
  params?: TournamentQueryParams
): Promise<TournamentResponse> => {
  const { data } = await apiClient.get("/v2/tournaments/", {
    params,
  })

  return data
}



export const fetchWalletLevel = async (): Promise<WalletLevel> => {
  const { data } = await apiClient.get("/v1/nps/wallet/level/")
  return data
}