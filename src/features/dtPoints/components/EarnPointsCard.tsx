import { Box, Typography, Stack, LinearProgress, Chip } from "@mui/material"

interface Milestone {
  id: number
  name: string
  description: string
  logo: string
  earned: boolean
}

interface Wallet {
  total_earned_points: number
  current_level: number
  points_to_level_up: number
}

interface Props {
  wallet: Wallet
  milestones: Milestone[]
}

export default function EarnPointsCard({ wallet, milestones }: Props) {

  return (
    <Box sx={card}>

      {/* Header */}
      <Typography sx={header}>
        Earn Points
      </Typography>

      {/* Available Points */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ p: 2 }}
      >

        <Box
          component="img"
          src="/coin.png"
          sx={{ width: 40 }}
        />

        <Box flex={1}>
          <Typography fontSize={12} color="text.secondary">
            AVAILABLE POINTS
          </Typography>

          <Typography fontWeight={700} fontSize={22}>
            {wallet.total_earned_points}
          </Typography>
        </Box>

        <Typography fontWeight={700} color="#3B82F6">
          {wallet.current_level}
        </Typography>

      </Stack>

      {/* Progress */}
      <Box sx={{ px: 2 }}>
        <LinearProgress
          variant="determinate"
          value={40}
          sx={{
            height: 6,
            borderRadius: 3
          }}
        />
      </Box>

      <Typography
        fontSize={12}
        color="text.secondary"
        sx={{ px: 2, mt: 1 }}
      >
        {wallet.points_to_level_up} points to level up
      </Typography>

      {/* GENERAL */}
      <Box sx={{ p: 2 }}>

        <Typography fontWeight={700} mb={1}>
          GENERAL
        </Typography>

        <Typography
          fontSize={13}
          color="text.secondary"
          mb={2}
        >
          Complete general tasks to receive additional points
          and unlock amazing rewards.
        </Typography>

        {milestones.map((m) => (

          <Stack
            key={m.id}
            direction="row"
            spacing={2}
            mb={2}
          >

            <Box
              component="img"
              src={m.logo}
              sx={{ width: 36 }}
            />

            <Box flex={1}>
              <Typography fontWeight={600}>
                {m.name}
              </Typography>

              <Typography
                fontSize={13}
                color="text.secondary"
              >
                {m.description}
              </Typography>
            </Box>

            {m.earned && (
              <Chip
                label="Achieved"
                size="small"
                color="success"
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