import { useQuery } from "@tanstack/react-query";

import {
  fetchQuestionReviews,
  fetchProgramFilters,
  fetchLearningPointFilters
} from "./questionReview.api";

import { questionReviewQueryKey } from "./questionReview.queryKey";

import { QuestionReviewFilters } from "./questionReview.types";


export const useQuestionReviews = (filters: QuestionReviewFilters) => {

  return useQuery({
    queryKey: questionReviewQueryKey.list(filters),
    queryFn: () => fetchQuestionReviews(filters),
  });
};


export const usePrograms = (search: string) => {

  return useQuery({
    queryKey: questionReviewQueryKey.programs(search),
    queryFn: () => fetchProgramFilters(search),
  });
};


export const useLearningPoints = (search: string) => {

  return useQuery({
    queryKey: questionReviewQueryKey.learningPoints(search),
    queryFn: () => fetchLearningPointFilters(search),
  });
};