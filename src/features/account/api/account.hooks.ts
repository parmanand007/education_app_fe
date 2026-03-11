import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import {
  fetchProfile,
  updateProfile,
} from "./account.api"

import {
  UpdateProfilePayload,
} from "./account.types"



export const useProfile = () => {

  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  })

}



export const useUpdateProfile = () => {

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: UpdateProfilePayload) =>
      updateProfile(payload),

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["profile"],
      })

    },
  })

}