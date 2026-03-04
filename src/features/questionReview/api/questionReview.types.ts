export interface QuestionReview {
  bookmarked: boolean
  question_id: string
  question: string
  type: string
  module_type: string[]
  choices: string[]
  answer: string[]
  explanation: string
  category: string[]
  learning_point: string[]
  weblink_type: string | null
  cover_image: string | null
  weblink: string | null
  source: string
  complexity: string
  status: string
  v28_compatibility: string
  question_tags: string[]
  updated_by: string
  explanation_video: string | null
  user_answer: string[]
  submission_date: string
  title: string
}

export interface QuestionReviewResponse {
  count: number
  next: string | null
  previous: string | null
  results: QuestionReview[]
}

export interface ProgramFilter {
  title: string
  program_id: string
}

export interface FilterResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}


export interface ProgramFilter {
  title: string;
  program_id: string;
}

export interface ProgramFilterResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProgramFilter[];
}

export interface LearningPointFilterResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: string[];
}

export interface QuestionReviewFilters {
  page: number;
  page_size: number;
  programs: string[];
  learning_points: string[];
  start_date?: string;
  end_date?: string;
}


export interface QuestionReview {
  question_id: string;
  question: string;
  title: string;
  learning_point: string[];
  category: string[];
  submission_date: string;
  answer: string[];
  user_answer: string[];
}


export interface QuestionReviewResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: QuestionReview[];
}