import { apiClient } from "../../../services/apiClient";
import { OrgGlobalConfiguration } from "./providerScorecard.types";

export const fetchOrgGlobalConfiguration = async (): Promise<OrgGlobalConfiguration> => {
  const response = await apiClient.get<OrgGlobalConfiguration>(
    "/v1/provider_scorecard/org_global_configuration/"
  );

  return response.data;
};