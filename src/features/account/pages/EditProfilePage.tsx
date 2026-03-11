import { Grid, Box, CircularProgress, Typography, Paper } from "@mui/material"

import { useProfile } from "../api/account.hooks"

import AvatarUpload from "../components/AvatarUpload"
import EditProfileForm from "../components/EditProfileForm"
import AccountSidebar from "../components/AccountSidebar"

export default function EditProfilePage() {

  const { data: profile, isLoading } = useProfile()

  if (isLoading) return <CircularProgress />

  if (!profile) return null

  return (

    <Box>

      <Typography
        variant="h5"
        sx={{ mb: 3 }}
      >
        Account
      </Typography>

      <Grid container spacing={3}>

        {/* LEFT SIDEBAR */}

        <Grid size={{ xs: 12, md: 4 }}>

          <AccountSidebar profile={profile} />

        </Grid>


        {/* RIGHT EDIT PANEL */}

        <Grid size={{ xs: 12, md: 8 }}>

          <Paper sx={{ p: 4 }}>

            <Typography
              variant="h6"
              sx={{ mb: 3 }}
            >
              Edit Profile
            </Typography>

            <Box sx={{ mb: 3 }}>

              <AvatarUpload
                avatarUrl={profile.avatar_url}
                firstName={profile.first_name}
                lastName={profile.last_name}
              />

            </Box>

            <EditProfileForm profile={profile} />

          </Paper>

        </Grid>

      </Grid>

    </Box>
  )
}