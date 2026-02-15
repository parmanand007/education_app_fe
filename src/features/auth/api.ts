import { apiClient } from "../../services/apiClient";
import type {
  SendOtpPayload,
  SendOtpResponse,
  VerifyOtpPayload,
  LoginSuccessResponse,
} from "./types";

export const sendOtpApi = async (
  payload: SendOtpPayload
): Promise<SendOtpResponse> => {
  const { data } = await apiClient.post(
    "/v2/login/get-otp/",
    payload
  );
  return data;
};

export const verifyOtpApi = async (
  payload: VerifyOtpPayload
): Promise<LoginSuccessResponse> => {
  const response = await apiClient.post(
    "/v1/login/",
    payload
  );

  console.log("AXIOS RAW RESPONSE:", response);
  console.log("AXIOS RESPONSE DATA:", response.data);

  return response.data;
};