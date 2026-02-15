export interface SendOtpPayload {
  phone_no?: string;
  email?: string;
  otp_type?: string;
  recaptcha: string;
}

export interface SendOtpResponse {
  msg: string;
  enable_otp_resend_after: number;
}

export interface VerifyOtpPayload {
  phone_no?: string;
  email?: string;
  otp: string;
  recaptcha?: string;
}

export interface LoginSuccessResponse {
  token: string;
  is_active: boolean;
  is_phone_no_verified: boolean;
  is_email_verified: boolean;
}

export interface ErrorResponse {
  error: string;
}