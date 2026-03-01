import { TournamentQueryParams } from "./contests.types";

export const getTournamentQueryKey = (
  params?: TournamentQueryParams
) => [
  "tournaments",
  params?.status ?? "active",
  params?.page ?? 1,
  params?.page_size ?? 1,
]