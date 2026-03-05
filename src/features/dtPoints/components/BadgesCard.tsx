import { Box, Typography, LinearProgress, Stack } from "@mui/material"

interface Badge {
  badge_id: string
  name: string
  value: number
  earned: boolean
  logo: string
  not_achieved_logo: string
}

interface Wallet {
  badges_count: number
  unclaimed_badges_count: number
}

interface Props {
  wallet: Wallet
  badges: Badge[]
}

export default function BadgesCard({ wallet, badges }: Props) {

  const claimed = wallet.badges_count
  const unclaimed = wallet.unclaimed_badges_count
  const total = claimed + unclaimed

  const progress = total ? (claimed / total) * 100 : 0

  return (
    <Box
      sx={{
        border: "1px solid #E5E7EB",
        borderRadius: 4,
        overflow: "hidden",
        background: "#fff"
      }}
    >

      {/* Header */}
      <Typography
        sx={{
          px: 2,
          py: 1.5,
          fontWeight: 700,
          borderBottom: "1px solid #E5E7EB",
          fontSize: 18
        }}
      >
        Badges
      </Typography>

      {/* Summary */}
      <Box sx={{ p: 2 }}>

        <Stack direction="row" spacing={2} alignItems="center">

          <Box
            component="img"
            src="/badge-icon.svg"
            sx={{ width: 42 }}
          />

          <Box>
            <Typography fontSize={12} color="text.secondary">
              TOTAL BADGES EARNED
            </Typography>

            <Typography fontWeight={700} fontSize={22}>
              {claimed}
            </Typography>
          </Box>

        </Stack>

        {/* Progress */}
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            mt: 2,
            height: 6,
            borderRadius: 3
          }}
        />

        {/* Claimed / Unclaimed */}
        <Stack
          direction="row"
          spacing={3}
          mt={1}
          fontSize={13}
        >
          <Typography color="#F59E0B">
            • {claimed} Claimed
          </Typography>

          <Typography color="#0284C7">
            • {unclaimed} Unclaimed
          </Typography>
        </Stack>

      </Box>

      {/* Divider */}
      <Box
        sx={{
          borderTop: "1px solid #E5E7EB"
        }}
      />

      {/* Badge Grid */}
      <Box sx={{ p: 2 }}>

        <Typography
          fontWeight={600}
          mb={2}
        >
          Badges for Tournaments
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 2
          }}
        >

          {badges.slice(0,4).map((badge) => (

            <Box
              key={badge.badge_id}
              textAlign="center"
            >

              <Box
                component="img"
                src={badge.earned ? badge.logo : badge.not_achieved_logo}
                sx={{
                  width: 64,
                  mb: 1,
                  opacity: badge.earned ? 1 : 0.5
                }}
              />

              <Typography
                fontSize={13}
                fontWeight={500}
              >
                {badge.name}
              </Typography>

              <Typography
                fontSize={12}
                sx={{
                  mt: 0.5,
                  color: "#F59E0B"
                }}
              >
                {badge.value} Points
              </Typography>

            </Box>

          ))}

        </Box>

        {/* See All */}
        <Typography
          sx={{
            mt: 2,
            fontSize: 14,
            color: "#2563EB",
            cursor: "pointer",
            textAlign: "right"
          }}
        >
          See All
        </Typography>

      </Box>

    </Box>
  )
}