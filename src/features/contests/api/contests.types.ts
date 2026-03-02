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
  assignment_type: string;

  current_submission: SubmissionData | null;
}

export interface ContestQueryParams {
  status?: number[];
  assignment_type?: string[];
  ordering?: string;
  tournament_id?: string;
  page?: number;
  page_size?: number;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Tournament {
  added_on: string
  tournament_id: string
  start_date: string
  end_date: string
  name: string
}

export interface TournamentResponse {
  count: number
  next: string | null
  previous: string | null
  results: Tournament[]
  contest_assignment_types: string[]
}

export interface TournamentQueryParams {
  status?: string
  page?: number
  page_size?: number
}

export interface WalletLevel {
  total_earned_points: number
  lifetime_balance: number
  current_level: number
  points_to_level_up: number
  current_level_starting_point: number
  next_level_starting_point: number
  redeemed_points: number
  current_streak_level: number
  max_streak_level: number
  badges_count: number
  constant_level: number
  unclaimed_badges_count: number
}