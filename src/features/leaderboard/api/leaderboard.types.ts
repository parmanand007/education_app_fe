export type LeaderboardAssignmentType =
  | "CLINIC"
  | "GROUP"
  | "ORG";

export interface LeaderboardUser {
  first_name: string;
  last_name: string;
  avatar_url: string | null;
  privacy_mode: boolean;
  anonymous_name: string | null;
}

export interface LeaderboardEntry {
  rank: number;
  rank_id: string;
  assignment_type: string;
  assignment_score: number;
  total_reactions: Record<string, number>;
  my_reactions: Record<string, number> | null;
  user: LeaderboardUser;
}

export interface LeaderboardResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: LeaderboardEntry[];
}

export interface LeaderboardQueryParams {
  tournament_id: string;
  assignment_type: LeaderboardAssignmentType;
  page?: number;
  page_size?: number;
}