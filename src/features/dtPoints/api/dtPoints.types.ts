export interface WalletLevel {
  total_earned_points: number
  lifetime_balance: number
  current_level: number
  points_to_level_up: number
  badges_count: number
  unclaimed_badges_count: number
}

export interface Milestone {
  id: number
  name: string
  description: string
  value: number
  logo: string
  earned: boolean
  type: "GENERAL" | "ACTIVITY"
}

export interface StreakHistory {
  title: string
  is_achieved: boolean
  points: string
}

export interface WeeklyPoints {
  total_streaks_level: number
  current_streak_level: number
  streaks_history: StreakHistory[]
}