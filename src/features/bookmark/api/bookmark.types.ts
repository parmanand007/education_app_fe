export interface BookmarkQuestion {
  question_id: string
  question: string
  type: string
  choices: string[]
  answer: string[]
  explanation: string
  learning_point: string[]
  category: string[]
}

export interface BookmarkItem {
  source: string
  phase: string
  title: string
  question: BookmarkQuestion
  added_on: string
  chapter: string
}

export interface BookmarkResponse {
  count: number
  next: string | null
  previous: string | null
  results: BookmarkItem[]
}

export interface ProgramFilter {
  program_id: string
  title: string
}

export type LearningPointFilter = string

export interface BookmarkQueryParams {
  page?: number
  page_size?: number
  programs?: string[]
  learning_point?: string[]
  phases?: string[]
}