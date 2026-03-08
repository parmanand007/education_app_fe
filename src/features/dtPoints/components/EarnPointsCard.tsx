import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Chip,
  Divider
} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

import goldCoin from "../../../assets/images/gold-coin.svg"
import rightLeaf from "../../../assets/images/dtPoints/right-leaf.svg"
import leftLeaf from "../../../assets/images/dtPoints/left-leaf.svg"

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

  const progress =
    wallet.total_earned_points /
    (wallet.total_earned_points + wallet.points_to_level_up) * 100

  return (
    <Box sx={card}>

      <Typography sx={header}>
        Earn Points
      </Typography>

      <Box sx={topSection}>

        {/* Points Row */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">

          {/* Left: Coin + Points */}
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Box
              component="img"
              src={goldCoin}
              sx={{ width: 48, height: 48, objectFit: "contain" }}
            />

            <Box>
              <Typography sx={pointsLabel}>
                AVAILABLE POINTS
              </Typography>

              <Typography sx={pointsValue}>
                {wallet.total_earned_points}
              </Typography>
            </Box>
          </Stack>

          {/* Right: Laurel + Level */}
          <Stack direction="row" alignItems="center" spacing={0}>
            <Box
              component="img"
              src={leftLeaf}
              sx={{ width: 20, height: 28, objectFit: "contain" }}
            />

            <Typography sx={levelText}>
              {wallet.current_level}
            </Typography>

            <Box
              component="img"
              src={rightLeaf}
              sx={{ width: 20, height: 28, objectFit: "contain" }}
            />
          </Stack>

        </Stack>

        {/* Progress Section */}
        <Box sx={progressWrapper}>

          {/* Next Level label — right aligned above circle */}
          <Stack direction="row" justifyContent="flex-end" pr="2px" mb={0.25}>
            <Typography sx={nextLevelText}>Next Level</Typography>
          </Stack>

          {/* Progress bar row with level circle at end */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={progressBar}
            />

            <Box sx={levelCircle}>
              {wallet.current_level + 1}
            </Box>
          </Stack>

          {/* Points to level up — right aligned, below bar */}
          <Stack direction="row" justifyContent="flex-end" pr="2px" mt={0.25}>
            <Typography sx={levelUpText}>
              {wallet.points_to_level_up} points to level up
            </Typography>
          </Stack>

        </Box>

      </Box>

      <Divider />

      <Box sx={{ p: 2 }}>

        <Typography sx={sectionTitle}>
          GENERAL
        </Typography>

        <Typography sx={sectionDesc}>
          Complete general tasks to receive additional points and unlock amazing rewards.
        </Typography>

        {milestones.map((m, index) => (

          <Box key={m.id}>

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              py={1.5}
            >

              <Box sx={iconWrapper}>
                <Box
                  component="img"
                  src={m.logo}
                  sx={{ width: 22, height: 22, objectFit: "contain" }}
                />
              </Box>

              <Box flex={1}>
                <Typography sx={milestoneTitle}>
                  {m.name}
                </Typography>

                <Typography sx={milestoneDesc}>
                  {m.description}
                </Typography>
              </Box>

              {m.earned && (
                <Chip
                  icon={<CheckCircleIcon sx={{ fontSize: 16 }} />}
                  label="Achieved"
                  size="small"
                  sx={achievedChip}
                />
              )}

            </Stack>

            {index !== milestones.length - 1 && <Divider />}

          </Box>

        ))}

      </Box>

    </Box>
  )
}

// ─── Styles ────────────────────────────────────────────────────────────────

const card = {
  border: "1px solid #E5C37A",
  borderRadius: "12px",
  overflow: "hidden",
  background: "#fff",
  width: "100%",
  maxWidth: 430,
}

const header = {
  px: 2,
  py: 1.25,
  fontWeight: 700,
  fontSize: 18,
  background: "#F5E6C8",
  borderBottom: "1px solid #E5C37A",
  color: "#1F2937",
}

const topSection = {
  background: "#FAFAFA",
  px: 2,
  py: 1.75,
}

const pointsLabel = {
  fontSize: 11,
  fontWeight: 600,
  color: "#6B7280",
  letterSpacing: 0.8,
  textTransform: "uppercase",
  mb: 0.25,
}

const pointsValue = {
  fontSize: 26,
  fontWeight: 700,
  color: "#1F2937",
  lineHeight: 1.1,
}

const levelText = {
  fontWeight: 700,
  fontSize: 20,
  color: "#3B82F6",
  lineHeight: 1,
  mx: "2px",
}

const progressWrapper = {
  mt: 1,
}

const progressBar = {
  flex: 1,
  height: 6,
  borderRadius: 3,
  backgroundColor: "#E5E7EB",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#2CA5B9",
    borderRadius: 3,
  },
}

const levelCircle = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: "#E5E7EB",
  border: "2px solid #D1D5DB",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: 13,
  color: "#374151",
  flexShrink: 0,
}

const nextLevelText = {
  fontSize: 12,
  color: "#6B7280",
  textAlign: "right" as const,
  lineHeight: 1.4,
}

const levelUpText = {
  fontSize: 12,
  color: "#6B7280",
  textAlign: "right" as const,
  mt: 0.5,
}

const sectionTitle = {
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: 0.6,
  color: "#374151",
  mb: 0.5,
}

const sectionDesc = {
  fontSize: 13,
  color: "#6B7280",
  mb: 2,
  lineHeight: 1.5,
}

const iconWrapper = {
  width: 44,
  height: 44,
  borderRadius: "50%",
  background: "#FEF3C7",           // warm amber/yellow background matching screenshot
  border: "1px solid #FDE68A",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}

const milestoneTitle = {
  fontWeight: 700,
  fontSize: 14,
  color: "#1F2937",
  mb: 0.25,
}

const milestoneDesc = {
  fontSize: 13,
  color: "#6B7280",
  lineHeight: 1.4,
}

const achievedChip = {
  background: "#D1FAE5",
  color: "#059669",
  fontWeight: 600,
  fontSize: 12,
  height: 28,
  border: "1px solid #A7F3D0",
  "& .MuiChip-icon": {
    color: "#059669",
    ml: "6px",
  },
  "& .MuiChip-label": {
    px: 1,
  },
}