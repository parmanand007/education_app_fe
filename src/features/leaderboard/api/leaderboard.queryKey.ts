import type { LeaderboardQueryParams } from "./leaderboard.types";

export const getLeaderboardQueryKey = (
  params?: LeaderboardQueryParams
) => [
  "leaderboard",
  params?.tournament_id ?? "none",
  params?.assignment_type ?? "CLINIC",
  params?.page ?? 1,
  params?.page_size ?? 10,
];