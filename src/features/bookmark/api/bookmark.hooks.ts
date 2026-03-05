import { useQuery } from "@tanstack/react-query"

import {
  fetchBookmarkedQuestions,
  fetchBookmarkPrograms,
  fetchBookmarkLearningPoints,
} from "./bookmark.api"

import { questionBookmarkQueryKey } from "./bookmark.queryKey"

import type { BookmarkQueryParams } from "./bookmark.types"


export const useBookmarkedQuestions = (
  params?: BookmarkQueryParams
) => {

  return useQuery({
    queryKey: questionBookmarkQueryKey.bookmarks(params),
    queryFn: () => fetchBookmarkedQuestions(params),
  })

}


export const useBookmarkPrograms = () => {

  return useQuery({
    queryKey: questionBookmarkQueryKey.programs(),
    queryFn: fetchBookmarkPrograms,
  })

}


export const useBookmarkLearningPoints = () => {

  return useQuery({
    queryKey: questionBookmarkQueryKey.learningPoints(),
    queryFn: fetchBookmarkLearningPoints,
  })

}