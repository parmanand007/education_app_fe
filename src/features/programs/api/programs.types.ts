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
