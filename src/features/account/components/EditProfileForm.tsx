import { useEffect, useState } from "react"
import { TextField, Button, Stack } from "@mui/material"

import { useUpdateProfile } from "../api/account.hooks"
import { ProfileResponse } from "../api/account.types"

interface Props {
  profile: ProfileResponse
}

export default function EditProfileForm({ profile }: Props) {

  const updateProfile = useUpdateProfile()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  useEffect(() => {
    setFirstName(profile.first_name ?? "")
    setLastName(profile.last_name ?? "")
  }, [profile])

  const handleSubmit = () => {

    updateProfile.mutate({
      first_name: firstName.trim(),
      last_name: lastName.trim(),
    })

  }

  return (

    <Stack spacing={2}>

      <TextField
        label="First Name"
        value={firstName}
        fullWidth
        onChange={(e) => setFirstName(e.target.value)}
      />

      <TextField
        label="Last Name"
        value={lastName}
        fullWidth
        onChange={(e) => setLastName(e.target.value)}
      />

      <TextField
        label="Email"
        value={profile.email}
        fullWidth
        disabled
      />

      <TextField
        label="Phone Number"
        value={profile.phone_no ?? ""}
        fullWidth
        disabled
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={updateProfile.isPending}
        sx={{
    bgcolor: "brand.tag",
    "&:hover": {
      bgcolor: "brand.dark",
    },
    color:"background.paper"
  }}
      >
        Save Changes
      </Button>

    </Stack>

  )
}