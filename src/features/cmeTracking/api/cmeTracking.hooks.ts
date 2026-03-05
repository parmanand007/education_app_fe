import { useQuery } from "@tanstack/react-query";

import {
  fetchCMESummary,
  fetchCMEData,
} from "./cmeTracking.api";


export const useCMESummary = () => {
  return useQuery({
    queryKey: ["cme-summary"],
    queryFn: fetchCMESummary,
  });
};


export const useCMEData = () => {
  return useQuery({
    queryKey: ["cme-data"],
    queryFn: fetchCMEData,
  });
};