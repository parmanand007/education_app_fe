import { Box, Typography, Stack, Chip } from "@mui/material"

interface Streak {
  title: string
  is_achieved: boolean
  points: string
}

interface Weekly {
  streaks_history: Streak[]
}

interface Props {
  weekly: Weekly
}

export default function TournamentCard({ weekly }: Props) {

  const rewards = weekly.streaks_history.slice(-5)

  return (
    <Box sx={card}>

      {/* Header */}
      <Typography sx={header}>
        Tournament
      </Typography>

      <Box sx={{ p: 2 }}>

        <Typography fontWeight={600}>
          Contest Streak
        </Typography>

        {/* Streak Dots */}
        <Stack direction="row" spacing={1} mt={1} mb={2}>

          {weekly.streaks_history.map((s, i) => (

            <Box
              key={i}
              sx={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: s.is_achieved
                  ? "#22C55E"
                  : "#EF4444"
              }}
            />

          ))}

        </Stack>

        <Typography fontSize={13} color="text.secondary" mb={2}>
          {weekly.streaks_history.length} contest streak
        </Typography>

      </Box>

      <Box
        sx={{
          borderTop: "1px solid #E5E7EB",
          p: 2
        }}
      >

        <Typography fontWeight={700}>
          REWARDS CHALLENGE
        </Typography>

        <Typography
          fontSize={13}
          color="text.secondary"
          mb={2}
        >
          Complete tournament based activity tasks
          to receive additional points.
        </Typography>

        {rewards.map((s, i) => (

          <Stack
            key={i}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >

            <Typography>
              {s.title}
            </Typography>

            {s.is_achieved ? (
              <Chip
                label="Achieved"
                size="small"
                color="success"
              />
            ) : (
              <Chip
                label={`${s.points} Points`}
                size="small"
                sx={{
                  background: "#FEF3C7"
                }}
              />
            )}

          </Stack>

        ))}

      </Box>

    </Box>
  )
}

const card = {
  border: "1px solid #E5E7EB",
  borderRadius: 4,
  overflow: "hidden",
  background: "#fff"
}

const header = {
  px: 2,
  py: 1.5,
  fontWeight: 700,
  borderBottom: "1px solid #E5E7EB",
  fontSize: 18,
  background: "#F9FAFB"
}