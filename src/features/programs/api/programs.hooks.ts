import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  fetchPrograms,
  fetchProgramDetail,
  fetchProgramChapters,
  fetchChapterQuestions,
  submitProgramAnswer,
  fetchProgramResult
} from "./programs.api";
import { ChapterQuestionsResponse, ProgramResult, SubmitPayload } from "./programs.types";



export const usePrograms = (
  params?: Parameters<typeof fetchPrograms>[0]
) => {
  return useQuery({
    queryKey: ["programs", params],
    queryFn: () => fetchPrograms(params),
  });
};



export const useProgramDetail = (
  programId?: string
) => {
  return useQuery({
    queryKey: ["program-detail", programId],
    queryFn: () => fetchProgramDetail(programId!),
    enabled: !!programId,
  });
};



export const useProgramChapters = (
  programId?: string,
  params?: Parameters<typeof fetchProgramChapters>[1]
) => {
  return useQuery({
    queryKey: ["program-chapters", programId, params],
    queryFn: () => fetchProgramChapters(programId!, params),
    enabled: !!programId,
  });
};

export const useChapterQuestions = (chapterId?: string) => {
  return useQuery<ChapterQuestionsResponse>({
    queryKey: ["chapter-questions", chapterId],
    queryFn: () => fetchChapterQuestions(chapterId!),
    enabled: !!chapterId
  })
}


export const useSubmitProgramAnswer = () => {

  const queryClient = useQueryClient()

  return useMutation({

    mutationFn: ({
      chapterId,
      questionId,
      answer,
      tta
    }: SubmitPayload) =>
      submitProgramAnswer(
        chapterId,
        questionId,
        answer,
        tta
      ),

    onSuccess: (_, variables) => {

      queryClient.invalidateQueries({
        queryKey: ["chapter-questions", variables.chapterId]
      })
       // IMPORTANT: keep progress + completion synced
      queryClient.invalidateQueries({
        queryKey: ["program-chapters"]
      })

      queryClient.invalidateQueries({
        queryKey: ["program-detail"]
      })

    }
    

  })
}

export const useProgramResult = (
  programId?: string
) => {

  return useQuery<ProgramResult, Error>({
    queryKey: ["program-result", programId],
    queryFn: () => fetchProgramResult(programId!),
    enabled: Boolean(programId),
    staleTime: 5 * 60 * 1000,
  })

}