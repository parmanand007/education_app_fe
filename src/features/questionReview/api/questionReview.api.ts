import { apiClient } from "../../../services/apiClient";

import {
  QuestionReviewResponse,
  QuestionReviewFilters,
  ProgramFilterResponse,
  LearningPointFilterResponse,
} from "./questionReview.types";

export const fetchQuestionReviews = async (
  filters: QuestionReviewFilters
): Promise<QuestionReviewResponse> => {

  const params = new URLSearchParams();

  params.append("page", String(filters.page));
  params.append("page_size", String(filters.page_size));

  if (filters.learning_points?.length) {
    params.append("learning_points", filters.learning_points.join(","));
  }

  if (filters.programs?.length) {
    params.append("programs", filters.programs.join(","));
  }

  if (filters.start_date) {
    params.append("start_date", filters.start_date);
  }

  if (filters.end_date) {
    params.append("end_date", filters.end_date);
  }
  if (filters.question_status_sort) {
    params.append("question_status_sort", filters.question_status_sort);
  }

  const response = await apiClient.get<QuestionReviewResponse>(
    `/v2/question/review/programs/?${params.toString()}`
  );

  return response.data;
};


export const fetchProgramFilters = async (
  search: string = ""
): Promise<ProgramFilterResponse> => {

  const response = await apiClient.get<ProgramFilterResponse>(
    `/v1/question/review/filters/?search=${search}&filter_type=programs`
  );

  return response.data;
};


export const fetchLearningPointFilters = async (
  search: string = ""
): Promise<LearningPointFilterResponse> => {

  const response = await apiClient.get<LearningPointFilterResponse>(
    `/v1/question/review/filters/?search=${search}&filter_type=learning_points`
  );

  return response.data;
};