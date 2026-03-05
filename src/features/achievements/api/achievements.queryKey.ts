export const achievementsQueryKeys = {
  all: ["achievements"] as const,

  programs: () =>
    [...achievementsQueryKeys.all, "programs"] as const
}