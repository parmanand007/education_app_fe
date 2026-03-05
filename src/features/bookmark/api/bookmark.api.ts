import { apiClient } from "../../../services/apiClient"

import type {
  BookmarkQueryParams,
  BookmarkResponse,
  ProgramFilter,
  LearningPointFilter,
} from "./bookmark.types"

export const fetchBookmarkedQuestions = async (
  params?: BookmarkQueryParams
): Promise<BookmarkResponse> => {

  const { data } = await apiClient.get(
    "/v2/question/bookmark/",
    {
      params: {
        ...params,
        programs: params?.programs?.join(","),
        learning_point: params?.learning_point?.join(","),
        phases: params?.phases?.join(","),
      },
    }
  )

  return data
}

export const fetchBookmarkPrograms = async (): Promise<{
  results: ProgramFilter[]
}> => {

  const { data } = await apiClient.get(
    "/v2/question/bookmark/filters/",
    {
      params: {
        filter_type: "programs",
        search: "",
      },
    }
  )

  return data
}

export const fetchBookmarkLearningPoints = async (): Promise<{
  results: LearningPointFilter[]
}> => {

  const { data } = await apiClient.get(
    "/v2/question/bookmark/filters/",
    {
      params: {
        filter_type: "learning_points",
        search: "",
      },
    }
  )

  return data
}