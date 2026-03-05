export const questionBookmarkQueryKey = {
  all: ["question-bookmark"] as const,

  bookmarks: (params?: any) =>
    [...questionBookmarkQueryKey.all, "bookmarks", params] as const,

  programs: () =>
    [...questionBookmarkQueryKey.all, "programs"] as const,

  learningPoints: () =>
    [...questionBookmarkQueryKey.all, "learningPoints"] as const,
}