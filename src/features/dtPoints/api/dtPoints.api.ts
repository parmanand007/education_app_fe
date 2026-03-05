import { apiClient } from "../../../services/apiClient"

export const fetchWalletLevel = async () => {
  const { data } = await apiClient.get("/v1/nps/wallet/level/")
  return data
}

export const fetchMilestones = async () => {
  const { data } = await apiClient.get("/v1/nps/milestone/points/")
  return data
}

export const fetchWeeklyPoints = async () => {
  const { data } = await apiClient.get("/v1/nps/tournaments/weekly_points/")
  return data
}

export const fetchBadges = async () => {
  const { data } = await apiClient.get("/v1/nps/earned/badges/")
  return data
}