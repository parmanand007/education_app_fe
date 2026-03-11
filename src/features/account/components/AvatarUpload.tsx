import { useRef, useState } from "react"
import { Avatar, Box, IconButton } from "@mui/material"
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera"

import { useUpdateProfile } from "../api/account.hooks"

interface Props {
  avatarUrl?: string | null
  firstName?: string
  lastName?: string
}

export default function AvatarUpload({
  avatarUrl,
  firstName,
  lastName,
}: Props) {

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const [preview, setPreview] = useState<string | null>(avatarUrl ?? null)

  const updateProfile = useUpdateProfile()


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const file = event.target.files?.[0]

    if (!file) return

    const previewUrl = URL.createObjectURL(file)

    setPreview(previewUrl)

    updateProfile.mutate({
      avatar: file
    })

  }


  const handleClick = () => {
    fileInputRef.current?.click()
  }


  const initials =
    `${firstName?.[0] ?? ""}${lastName?.[0] ?? ""}`.toUpperCase()


  return (
    <Box
      sx={{
        position: "relative",
        width: 90,
        height: 90
      }}
    >

      <Avatar
        src={preview ?? undefined}
        sx={{
          width: 90,
          height: 90,
          fontSize: 28
        }}
      >
        {initials}
      </Avatar>

      <IconButton
        size="small"
        onClick={handleClick}
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          bgcolor: "white",
          border: "1px solid #ddd"
        }}
      >
        <PhotoCameraIcon fontSize="small" />
      </IconButton>

      <input
        type="file"
        ref={fileInputRef}
        hidden
        accept="image/*"
        onChange={handleFileChange}
      />

    </Box>
  )
}