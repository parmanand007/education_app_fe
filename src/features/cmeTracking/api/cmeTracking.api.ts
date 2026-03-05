import { apiClient } from "../../../services/apiClient";

import {
  CMESummaryResponse,
  CMEDataResponse,
} from "./cmeTracking.types";


export const fetchCMESummary = async (): Promise<CMESummaryResponse> => {

  const response = await apiClient.get<CMESummaryResponse>(
    "/v2/cme/summary/"
  );

  return response.data;
};


export const fetchCMEData = async (): Promise<CMEDataResponse> => {

  const response = await apiClient.get<CMEDataResponse>(
    "/v1/cme_data/"
  );

  return response.data;
};