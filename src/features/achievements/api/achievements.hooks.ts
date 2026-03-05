import { useQuery } from "@tanstack/react-query"

import { fetchAchievementsPrograms } from "./achievements.api"
import { achievementsQueryKeys } from "./achievements.queryKey"

export const useAchievementsPrograms = () => {
  return useQuery({
    queryKey: achievementsQueryKeys.programs(),
    queryFn: fetchAchievementsPrograms,
    staleTime: 1000 * 60 * 5
  })
}