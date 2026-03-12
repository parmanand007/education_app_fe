import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchContestQuestions, fetchContests, fetchTournaments, fetchWalletLevel, submitContestAnswers } from "./contests.api";
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

export const useContestQuestions = (questionnaireId: string) => {

  return useQuery({
    queryKey: ["contest-questions", questionnaireId],
    queryFn: () => fetchContestQuestions(questionnaireId),
    enabled: !!questionnaireId,
  })

}

export const useSubmitContestAnswers = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: submitContestAnswers,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["contest-questions", variables.questionnaire_id],
      })

    },
  })

}