export interface SubmissionData {
  progress: number;
  total_questions_answered: number;
}

export interface Contest {
  questionnaire_id: string;
  title: string;
  start_date: string;
  end_date: string;

  status: number;
  redeem_allowed: boolean;
  points_to_unlock: number | null;

  current_submission: SubmissionData | null;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
