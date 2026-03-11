import { Box, Paper, Stack, Typography } from "@mui/material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

import ProfileCard from "./ProfileCard"
import { ProfileResponse } from "../api/account.types"

interface Props {
  profile: ProfileResponse
}

export default function AccountSidebar({ profile }: Props) {

  return (
    <Stack spacing={2}>

      <ProfileCard profile={profile} />

      <Paper sx={{ p: 1 ,borderRadius:0.5}}>

        <Stack>

          <MenuItem title="Basic Profile" active />

          <MenuItem title="NPI Number" />

          <MenuItem title="Logout" />

        </Stack>

      </Paper>

    </Stack>
  )
}

interface MenuProps {
  title: string
  active?: boolean
}

function MenuItem({ title, active }: MenuProps) {

  return (
    <Box
      sx={{
        px: 2,
        py: 1.6,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: active ? "brand.light" : "transparent",
        borderRadius: 1,
        cursor: "pointer",
      }}
    >

      <Typography
        variant="body2"
        fontWeight={active ? 600 : 500}
      >
        {title}
      </Typography>

      <ChevronRightIcon fontSize="small" />

    </Box>
  )
}