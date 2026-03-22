import { useQuery } from "@tanstack/react-query";
import { fetchAnnualPerformance, fetchLearningInsights, fetchLearningPoints, fetchOrgGlobalConfiguration, LearningInsightsParams, LearningPointsParams } from "./providerScorecard.api";
import { AnnualPerformance, OrgGlobalConfiguration } from "./providerScorecard.types";

export const useOrgGlobalConfiguration = () => {
  return useQuery({
    queryKey: ["org-global-configuration"],
    queryFn: fetchOrgGlobalConfiguration,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useLearningInsights = (params: LearningInsightsParams) => {
  return useQuery({
    queryKey: [
      "learning-insights",
      params.start_date,
      params.end_date
    ],
    queryFn: () => fetchLearningInsights(params),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev // replaces keepPreviousData
  });
};

export const useLearningPoints = (params: LearningPointsParams) => {
  return useQuery({
    queryKey: [
      "learning-points",
      params.start_date,
      params.end_date,
      params.earned_at || "ALL",
      params.page || 1
    ],
    queryFn: () => fetchLearningPoints(params),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev 
  });
};

export const useLearningPointDetails = (params: {
  start_date: string;
  end_date: string;
  learning_point: string;
}) => {
  return useQuery({
    queryKey: [
      "learning-point-details",
      params.start_date,
      params.end_date,
      params.learning_point
    ],
    queryFn: () => fetchLearningPoints(params),
    enabled: !!params.learning_point
  });
};

export const useLearningProgress = () => {
  const configQuery = useQuery<OrgGlobalConfiguration>({
    queryKey: ["org-config"],
    queryFn: fetchOrgGlobalConfiguration,
    staleTime: 1000 * 60 * 5
  });

  const performanceQuery = useQuery<AnnualPerformance>({
    queryKey: ["annual-performance"],
    queryFn: fetchAnnualPerformance,
    staleTime: 1000 * 60 * 2
  });

  return {
    config: configQuery.data,
    performance: performanceQuery.data,
    isLoading: configQuery.isLoading || performanceQuery.isLoading,
    isError: configQuery.isError || performanceQuery.isError
  };
};