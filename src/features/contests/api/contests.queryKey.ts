import { TournamentQueryParams } from "./contests.types";

export const getTournamentQueryKey = (
  params?: TournamentQueryParams
) => [
  "tournaments",
  params?.status ?? "active",
  params?.page ?? 1,
  params?.page_size ?? 1,
]

import { ContestQueryParams } from "./contests.types";

export const getContestQueryKey = (
  params?: ContestQueryParams
) => [
  "contests",
  params?.tournament_id ?? "all",
  params?.ordering ?? "-start_date",
  (params?.status ?? []).slice().sort().join(",") || 0,
  (params?.assignment_type ?? []).slice().sort().join(",") || "ORG",
  params?.page ?? 1,
  params?.page_size ?? 10,
];