import {
  Box,
  CircularProgress,
  Typography,
  Stack
} from "@mui/material"

import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined"

import { useAchievementsPrograms } from "../api/achievements.hooks"
import AchievementCard from "../components/AchievementCard"

export default function AchievementsPage() {

  const { data, isLoading } = useAchievementsPrograms()

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>

      {/* Hero Section */}
      <Box
        sx={(theme) => ({
          background: theme.palette.brand.light,
          borderRadius: 3,
          p: 3,
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        })}
      >
        <Box>
          <Typography
            variant="h5"
            sx={(theme) => ({
              fontWeight: 600,
              color: theme.palette.brand.dark,
              mb: 0.5
            })}
          >
            My Achievements
          </Typography>

          <Typography
            sx={(theme) => ({
              color: theme.palette.text.secondary,
              fontSize: 14
            })}
          >
            Seamlessly monitor and manage your continuing medical education credits all in one place.
          </Typography>
        </Box>

        {/* Right Icon */}
        <WorkspacePremiumOutlinedIcon
          sx={(theme) => ({
            fontSize: 80,
            color: theme.palette.brand.muted
          })}
        />
      </Box>

      {/* Cards Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 3
        }}
      >
        {data?.results.map((program) => (
          <AchievementCard
            key={program.program_id}
            program={program}
          />
        ))}
      </Box>

    </Box>
  )
}