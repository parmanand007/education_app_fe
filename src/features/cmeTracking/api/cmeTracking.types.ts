export interface CMEClassification {
  earned_at: "CONTEST" | "PROGRAMS";
  cme_credits: number;
}

export interface CMESummaryResponse {
  current_year_cme_hours: number;
  last_year_cme_hours: number;
  current_year_cme_classification: CMEClassification[];
}

export interface CMEInfo {
  title: string;
  program_id?: string;
}

export interface CMEDataItem {
  cme_credits: number;
  earned_at: "CONTEST" | "PROGRAMS";
  created_on: string;
  cme_info: CMEInfo;
}

export type CMEDataResponse = CMEDataItem[];