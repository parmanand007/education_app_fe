export interface Program {
  program_id: string;
  title: string;
  sub_title: string | null;
  description: string | null;
  image: string | null;
  complexity: string;
  categories: string[];
  modules_count: number;
  modules_completed: number;
  completion_percentage: number;
  score_percentage: number;
  status: 0 | 1 | 2;
  mandatory: boolean;
  sequential: boolean;
  assigned: boolean;
  expired: boolean;
  start_date: string | null;
  end_date: string | null;
  assigned_on: string | null;
}

export interface Program {
  program_id: string;
  title: string;
  sub_title: string | null;
  description: string | null;
  image: string | null;
  complexity: string;
  categories: string[];
  modules_count: number;
  modules_completed: number;
  completion_percentage: number;
  score_percentage: number;
  status: 0 | 1 | 2;
  mandatory: boolean;
  sequential: boolean;
  assigned: boolean;
  expired: boolean;
  start_date: string | null;
  end_date: string | null;
  assigned_on: string | null;
}



/* Program Detail API */

export interface ProgramDetail {
  program_id: string;
  title: string;
  sub_title: string | null;

  description: string | null;
  learning_objectives: string | null;
  program_structure: string | null;

  image: string | null;
  cover_video: string | null;

  complexity: string;

  categories: string[];
  learning_points: string[];

  assigned_on: string | null;
  last_submission_date: string | null;

  cme_earned: number;
  modules_count: number;

  mandatory: boolean;
  sequential: boolean;
  expired: boolean;

  start_date: string | null;
  end_date: string | null;

  status: number;
}



/* Module inside chapter */

export interface ChapterModule {
  media: string | null;

  module_id: string;
  module_name: string;

  module_type: string[];
  module_role: string[];

  module_categories: string[];
  learning_point: string[];

  questions_set: string[];

  with_certificate: boolean;
  is_active: boolean;

  description: string | null;
  internal_notes: string | null;

  cover_image: string | null;
  cover_video: string | null;

  added_on: string;
  updated_on: string;
}



/* Chapter */

export interface Chapter {
  chapter_id: string;
  chapter_type: string;

  module_view: ChapterModule[];

  is_mandatory: boolean;
  show_answer: boolean;

  initial_certification: boolean;
  recertification: boolean;
  non_dt_certification: boolean;

  score: number;
  progress: number;

  is_completed: boolean;

  added_on: string;
  order: number;
}



/* Chapters API Response */

export interface ProgramChaptersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Chapter[];
}

export interface ProgramQuestion {

  question_id: string
  question: string
  choices: string[]

  type: "SC" | "MC" | "BC"

  explanation: string | null

  user_submitted_answer: string[] | null
  correct_answer: string[] | null

  module_details: {
    module_id: string
    module_name: string
    media: {
      media: string | null
      thumbnail: string | null
      post_type: string
      post_id: string
    }[]
  }

}

export interface ChapterQuestionsResponse {

  questions_data: ProgramQuestion[]
  questions_submitted: number

}


export interface SubmitPayload {
  chapterId: string
  questionId: string
  answer: string[]
  tta: number
}

export interface ProgramResult {
  program_name: string

  mandatory: boolean
  difficulty_level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED"

  total_questions: number
  total_correct_answers: number
  score_percentage: number

  modules_count: number
  modules_completed: number

  certification_score: number
  certification_earned: boolean

  completed_date: string

  cme_hours: number

  assigned_on: string | null
  start_date: string | null
  end_date: string | null

  user_rating: number | null
}