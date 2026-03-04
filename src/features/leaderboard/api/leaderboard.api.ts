import { apiClient } from "../../../services/apiClient";
import type {
  LeaderboardQueryParams,
  LeaderboardResponse,
} from "./leaderboard.types";

export const fetchLeaderboard = async (
  params: LeaderboardQueryParams
): Promise<LeaderboardResponse> => {
  const { tournament_id, ...queryParams } = params;

  const { data } = await apiClient.get(
    `/v2/tournaments/${tournament_id}/leaderboard/`,
    {
      params: queryParams,
    }
  );

  return data;
};