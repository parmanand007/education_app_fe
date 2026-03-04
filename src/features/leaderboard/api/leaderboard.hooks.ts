import { useQuery } from "@tanstack/react-query";
import { fetchLeaderboard } from "./leaderboard.api";
import { getLeaderboardQueryKey } from "./leaderboard.queryKey";
import { LeaderboardQueryParams } from "./leaderboard.types";

export const useLeaderboard = (
  params?: LeaderboardQueryParams
) => {
  return useQuery({
    queryKey: getLeaderboardQueryKey(params),
    queryFn: () => fetchLeaderboard(params!),
    placeholderData: (prev) => prev,
    enabled: !!params?.tournament_id,
  });
};