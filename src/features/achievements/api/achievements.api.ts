import { apiClient } from "../../../services/apiClient"

import type {
  AchievementsProgramsResponse
} from "./achievements.types"


export const fetchAchievementsPrograms =
  async (): Promise<AchievementsProgramsResponse> => {

  const { data } = await apiClient.get(
    "/v1/my_achievements/programs/"
  )

  return data
}