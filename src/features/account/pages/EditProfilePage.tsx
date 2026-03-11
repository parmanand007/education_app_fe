import { Grid, Box, CircularProgress, Typography, Paper } from "@mui/material";

import { useProfile } from "../api/account.hooks";

import AvatarUpload from "../components/AvatarUpload";
import EditProfileForm from "../components/EditProfileForm";
import ProfileCard from "../components/ProfileCard";

export default function EditProfilePage() {

  const { data: profile, isLoading } = useProfile();

  if (isLoading) return <CircularProgress />;

  if (!profile) return null;

  return (

    <Box>

      <Typography
        variant="h5"
        sx={{ mb: 3 }}
      >
        Account Settings
      </Typography>

      <Grid container spacing={3}>

        {/* LEFT PROFILE CARD */}

        <Grid size={{ xs: 12, md: 4 }}>

          <ProfileCard profile={profile} />

        </Grid>


        {/* RIGHT EDIT PROFILE */}

        <Grid size={{ xs: 12, md: 8 }}>

          <Paper sx={{ p: 3 }}>

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
  );
}