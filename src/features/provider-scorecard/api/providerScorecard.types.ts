export interface OrgGlobalConfiguration {
  page_clinical_shown: boolean;
  page_training_shown: boolean;
  page_panel_shown: boolean;

  annual_target_goal: number;

  start_date: string;
  end_date: string;

  clinical_data: ClinicalData;
  training_data: TrainingData;
}

export interface ClinicalData {
  cl_readdressed_card_shown: boolean;
  cl_suspect_card_shown: boolean;
  cl_awv_card_shown: boolean;
  cl_raf_card_shown: boolean;
}

export interface TrainingData {
  tr_overall_training_shown: boolean;
  tr_learning_stats_shown: boolean;

  overall_training_data: {
    tr_weekly_participation_shown: boolean;
    tr_question_accuracy_shown: boolean;
    tr_total_question_answered_shown: boolean;
    tr_video_watched_shown: boolean;
    tr_articles_read_shown: boolean;
    tr_annual_prog_accomplished_shown: boolean;
  };
}

export interface AnnualPerformance {
  start_date: string;
  end_date: string;

  current_kpi: {
    annual_achieved: number;
    total_achieved_months: number;
    total_months: number;
    org_average: number;
    monthly_achieved: boolean;
  };

  year_status: {
    programs_compliance: number;
    annual_certification_completion: boolean;
    missed: number;
    completed: number;
  };

  months_status: MonthStatus[];

  target_data: {
    tr_weekly_participation_target_data: number;
    tr_question_accuracy_target_data: number;
    tr_total_question_answered_target_data: number;
    tr_video_watched_target_data: number;
    tr_articles_read_target_data: number;
    tr_programs_completion_target_data: number;
  };
}

export interface MonthStatus {
  missed: number;
  completed: number;
  contest_participation: number;
  questions_accuracy: number;
  questions_answered: number;
  videos_watched: number;
  articles_read: number;
  year: number;
  month_id: number;
  status: number;
}