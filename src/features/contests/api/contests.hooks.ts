import { useQuery } from "@tanstack/react-query";
import { fetchContests, fetchTournaments, fetchWalletLevel } from "./contests.api";
import { ContestQueryParams, TournamentQueryParams, TournamentResponse, WalletLevel } from "./contests.types";
import { getContestQueryKey, getTournamentQueryKey } from "./contests.queryKey";

export const useContests = (params?: ContestQueryParams) => {
  return useQuery({
    queryKey: getContestQueryKey(params),
    queryFn: () => fetchContests(params),
    placeholderData: (prev) => prev, // smooth pagination
    staleTime: 1000 * 60 * 2, // cache for 2 minutes
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