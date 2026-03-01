import { useQuery } from "@tanstack/react-query";
import { fetchOrgGlobalConfiguration } from "./providerScorecard.api";

export const useOrgGlobalConfiguration = () => {
  return useQuery({
    queryKey: ["org-global-configuration"],
    queryFn: fetchOrgGlobalConfiguration,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};