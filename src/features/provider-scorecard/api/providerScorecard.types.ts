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