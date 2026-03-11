export interface Clinic {
  clinic_id: string
  name: string
}

export interface ProfileResponse {
  user_id: string
  first_name: string
  last_name: string
  email: string
  phone_no: string | null

  avatar_url: string | null
  profile_image: string | null

  organization: string
  clinic: Clinic | null

  role: string
  premium: number

  is_active: boolean
  is_email_verified: boolean
  is_personal_email_verified: boolean
  is_phone_no_verified: boolean

  npi: string | null
  npi_attempts_remaining: number

  privacy_mode: boolean
  show_survey: boolean

  region: string | null
  expired_on: string | null
}

export interface UpdateProfilePayload {
  first_name?: string
  last_name?: string
  phone_no?: string
  avatar?: File
}