import { apiClient } from "../../../services/apiClient"

import {
  ProfileResponse,
  UpdateProfilePayload,
} from "./account.types"



export const fetchProfile = async (): Promise<ProfileResponse> => {

  const response = await apiClient.get<ProfileResponse>(
    "/v2/profile/"
  )

  return response.data
}



export const updateProfile = async (
  payload: UpdateProfilePayload
): Promise<ProfileResponse> => {

  const formData = new FormData()

  if (payload.first_name !== undefined) {
    formData.append("first_name", payload.first_name)
  }

  if (payload.last_name !== undefined) {
    formData.append("last_name", payload.last_name)
  }

  if (payload.phone_no !== undefined) {
    formData.append("phone_no", payload.phone_no)
  }

  if (payload.avatar !== undefined) {
    formData.append("avatar", payload.avatar)
  }

  const response = await apiClient.put<ProfileResponse>(
    "/v2/profile/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )

  return response.data
}