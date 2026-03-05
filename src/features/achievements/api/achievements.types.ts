export interface AchievementProgram {
  program_id: string
  program_name: string
  category: string[]
  no_of_modules: number
  image: string
  module_id: string
  score: number
  complexity: "BEGINNER" | "INTERMEDIATE" | "ADVANCED"
  mandatory: boolean
  certificate_id: string
  certificate: string
  added_on: string
  chapter: number
}

export interface AchievementsProgramsResponse {
  count: number
  next: string | null
  previous: string | null
  results: AchievementProgram[]
}