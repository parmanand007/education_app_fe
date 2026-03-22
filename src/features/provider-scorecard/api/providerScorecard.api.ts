import { apiClient } from "../../../services/apiClient";
import { AnnualPerformance, OrgGlobalConfiguration } from "./providerScorecard.types";

export const fetchOrgGlobalConfiguration = async (): Promise<OrgGlobalConfiguration> => {
  const response = await apiClient.get<OrgGlobalConfiguration>(
    "/v1/provider_scorecard/org_global_configuration/"
  );

  return response.data;
};

export interface LearningInsightsParams {
  start_date: string;
  end_date: string;
}

export const fetchLearningInsights = async (
  params: LearningInsightsParams
) => {
  const res = await apiClient.get("/v2/learning_insights_view/", {
    params: {
      start_date: params.start_date,
      end_date: params.end_date
    }
  });

  return res.data;
};

export interface LearningPointsParams {
  start_date: string;
  end_date: string;
  page?: number;
  earned_at?: "PROGRAMS" | "CONTEST" | "TAILORED_CT";
  learning_point?: string;
}
export const fetchLearningPoints = async (
  params: LearningPointsParams
) => {
  const res = await apiClient.get("/v2/learning_point_stats/", {
    params: {
      start_date: params.start_date,
      end_date: params.end_date,
      page: params.page,
      ...(params.earned_at && { earned_at: params.earned_at }),
      ...(params.learning_point && { learning_point: params.learning_point }) 
    }
  });

  return res.data;
};


export const fetchAnnualPerformance = async (): Promise<AnnualPerformance> => {
  const res = await apiClient.get("/v1/provider_scorecard/annual_performance/");
  return res.data;
};