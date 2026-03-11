import { Avatar, Box, Typography, Paper, Stack } from "@mui/material"
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"
import BusinessIcon from "@mui/icons-material/Business"
import BadgeIcon from "@mui/icons-material/Badge"

import { ProfileResponse } from "../api/account.types"

interface Props {
  profile: ProfileResponse
}

export default function ProfileCard({ profile }: Props) {

  const initials =
    `${profile.first_name?.[0] ?? ""}${profile.last_name?.[0] ?? ""}`.toUpperCase()

  const fullName = `${profile.first_name} ${profile.last_name}`

  return (

    <Paper
      elevation={1}
      sx={{
        display: "flex",
        overflow: "hidden",
        borderRadius: 2,
      }}
    >

      {/* Left colored strip */}

      <Box
        sx={{
          width: 70,
          bgcolor: "#2da5c4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <Avatar
          src={profile.avatar_url ?? undefined}
          sx={{
            width: 64,
            height: 64,
            fontSize: 24,
            bgcolor: "#9e9e9e",
          }}
        >
          {initials}
        </Avatar>

      </Box>



      {/* Right content */}

      <Box
        sx={{
          flex: 1,
          p: 2,
        }}
      >

        <Typography
          variant="subtitle1"
          fontWeight={600}
        >
          {fullName}
        </Typography>


        <Stack spacing={1} mt={1}>

          <Stack direction="row" spacing={1} alignItems="center">

            <BadgeIcon fontSize="small" color="action" />

            <Typography variant="body2">
              {profile.role === "CL" ? "Clinical" : profile.role}
            </Typography>

          </Stack>


          <Stack direction="row" spacing={1} alignItems="center">

            <BusinessIcon fontSize="small" color="action" />

            <Typography variant="body2">
              {profile.organization}
            </Typography>

          </Stack>


          {profile.clinic && (

            <Stack direction="row" spacing={1} alignItems="center">

              <LocalHospitalIcon fontSize="small" color="action" />

              <Typography variant="body2">
                {profile.clinic.name}
              </Typography>

            </Stack>

          )}

        </Stack>

      </Box>

    </Paper>
  )
}