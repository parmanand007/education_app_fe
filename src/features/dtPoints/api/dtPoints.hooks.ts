import { useQuery } from "@tanstack/react-query"

import {
  fetchWalletLevel,
  fetchMilestones,
  fetchWeeklyPoints,
  fetchBadges
} from "./dtPoints.api"

export const useWalletLevel = () =>
  useQuery({
    queryKey: ["walletLevel"],
    queryFn: fetchWalletLevel
  })

export const useMilestones = () =>
  useQuery({
    queryKey: ["milestones"],
    queryFn: fetchMilestones
  })

export const useWeeklyPoints = () =>
  useQuery({
    queryKey: ["weeklyPoints"],
    queryFn: fetchWeeklyPoints
  })

export const useBadges = () =>
  useQuery({
    queryKey: ["badges"],
    queryFn: fetchBadges
  })