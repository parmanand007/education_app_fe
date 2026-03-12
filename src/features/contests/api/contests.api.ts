import { apiClient } from "../../../services/apiClient";
import type {
   Contest, ContestQueryParams, PaginatedResponse, TournamentQueryParams, 
   TournamentResponse, WalletLevel,
    ContestQuestionsResponse,
  SubmitContestAnswerPayload,
  
  } from "./contests.types";

import type {

} from "./contests.types"

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


export const fetchContestQuestions = async (
  questionnaireId: string
): Promise<ContestQuestionsResponse> => {

  const { data } = await apiClient.get(
    `/v1/web/contests/${questionnaireId}/questions/`
  )

  return data
}

export const submitContestAnswers = async (
  payload: SubmitContestAnswerPayload
) => {

  const { data } = await apiClient.post(
    `/v1/web/contests/submit/`,
    payload
  )

  return data
}