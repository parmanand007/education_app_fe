import { useQuery } from "@tanstack/react-query";
import { fetchContests, fetchTournaments, fetchWalletLevel } from "./contests.api";
import type { ContestQueryParams } from "./contests.api";
import { TournamentQueryParams, TournamentResponse, WalletLevel } from "./contests.types";
import { getTournamentQueryKey } from "./contests.queryKey";

export const useContests = (params?: ContestQueryParams) => {
  return useQuery({
    queryKey: ["contests", params],
    queryFn: () => fetchContests(params),
  });
};



export const useTournaments = (
  params?: TournamentQueryParams
) => {
  return useQuery<TournamentResponse>({
    queryKey: getTournamentQueryKey(params),
    queryFn: () => fetchTournaments(params),
    placeholderData: (prev) => prev,
  })
}

export const useWalletLevel = () => {
  return useQuery<WalletLevel>({
    queryKey: ["wallet-level"],
    queryFn: fetchWalletLevel,
    staleTime: 1000 * 60 * 5,
  })
}