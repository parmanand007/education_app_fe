import { Box, Typography, Stack, Chip } from "@mui/material"
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"

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

  const rewards = weekly.streaks_history.slice(-9)
  const streakCount = weekly.streaks_history.length

  return (
    <Box
      sx={{
        border: "1.5px solid #F59E0B",
        borderRadius: 3,
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
      }}
    >

      {/* Header */}
      <Box
        sx={{
          px: 2.5,
          py: 1.75,
          fontWeight: 700,
          borderBottom: "1.5px solid #F59E0B",
          fontSize: 17,
          background: "#F5E6C8",
          color: "#1E3A5F"
        }}
      >
        Tournament
      </Box>

      <Box sx={{ px: 2.5, pt: 2, pb: 1.5 }}>

        {/* Contest Streak Header */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={1.5}
        >

          <Stack direction="row" spacing={1} alignItems="center">

            {/* Fire icon with red count badge */}
            <Box sx={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
              <LocalFireDepartmentIcon sx={{ color: "#F97316", fontSize: 30 }} />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: -3,
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  background: "#EF4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 8,
                  fontWeight: 800,
                  color: "#fff",
                  border: "1.5px solid #fff",
                  lineHeight: 1
                }}
              >
                0
              </Box>
            </Box>

            <Typography
              fontWeight={700}
              sx={{ color: "#F97316", fontSize: 15 }}
            >
              Contest Streak
            </Typography>

          </Stack>

          {/* Next up + trophy */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography sx={{ fontSize: 12, color: "#9CA3AF", fontWeight: 500 }}>
              Next up
            </Typography>
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#E5E7EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <EmojiEventsIcon sx={{ fontSize: 17, color: "#9CA3AF" }} />
            </Box>
          </Stack>

        </Stack>

        {/* Streak Dots Row */}
        <Stack direction="row" alignItems="center" spacing={0} mb={1}>
          {weekly.streaks_history.map((s, i) => {
            const isLast = i === weekly.streaks_history.length - 1
            return (
              <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
                {/* Circle dot */}
                {isLast ? (
                  // Empty grey outlined circle = "next up" slot
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      border: "2px solid #D1D5DB",
                      background: "#fff",
                      flexShrink: 0
                    }}
                  />
                ) : s.is_achieved ? (
                  <CheckCircleIcon sx={{ fontSize: 30, color: "#22C55E", flexShrink: 0 }} />
                ) : (
                  <CancelIcon sx={{ fontSize: 30, color: "#EF4444", flexShrink: 0 }} />
                )}

                {/* Connecting line between dots */}
                {i < weekly.streaks_history.length - 1 && (
                  <Box
                    sx={{
                      width: 6,
                      height: 2,
                      background: "#D1D5DB",
                      flexShrink: 0
                    }}
                  />
                )}
              </Box>
            )
          })}
        </Stack>

        <Typography
          sx={{
            fontSize: 13,
            color: "#374151",
            fontWeight: 700
          }}
        >
          {streakCount} contest streak
        </Typography>

      </Box>

      {/* Rewards Section */}
      <Box
        sx={{
          borderTop: "1px solid #E5E7EB",
          px: 2.5,
          pt: 1.5,
          pb: 2
        }}
      >

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={0.5}
        >
          <Typography
            sx={{
              fontWeight: 700,
              color: "#374151",
              fontSize: 13,
              letterSpacing: 0.4
            }}
          >
            REWARDS CHALLENGE
          </Typography>

          {/* Info icon circle */}
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "1.5px solid #9CA3AF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 700,
              color: "#9CA3AF",
              fontStyle: "italic",
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            i
          </Box>
        </Stack>

        <Typography
          sx={{
            fontSize: 12,
            color: "#6B7280",
            mb: 1.5,
            lineHeight: 1.5
          }}
        >
          Complete tournament based activity tasks to receive additional points.
        </Typography>

        {/* Reward rows — NO vertical line, just indented */}
        <Box>
          {rewards.map((s, i) => (
            <Stack
              key={i}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 1.25 }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                {s.is_achieved ? (
                  <CheckCircleIcon sx={{ color: "#22C55E", fontSize: 24 }} />
                ) : (
                  <CancelIcon sx={{ color: "#EF4444", fontSize: 24 }} />
                )}
                <Typography fontWeight={600} sx={{ fontSize: 14, color: "#111827" }}>
                  {s.title}
                </Typography>
              </Stack>

              {s.is_achieved ? (
                <Chip
                  icon={<CheckCircleIcon style={{ color: "#059669", fontSize: 13 }} />}
                  label="Achieved"
                  size="small"
                  sx={{
                    background: "#D1FAE5",
  color: "#059669",
                    fontWeight: 700,
                    fontSize: 12,
                    borderRadius: "6px",
                    height: 26,
                    "& .MuiChip-icon": { ml: 0.75, mr: -0.25, color: "#059669"},
                    "& .MuiChip-label": { px: 1 }
                  }}
                />
              ) : (
                <Chip
                  icon={<MonetizationOnIcon style={{ color: "#F59E0B", fontSize: 14 }} />}
                  label={`${s.points} Points`}
                  size="small"
                  sx={{
                    background: "#FEF3C7",
                    color: "#D97706",
                    fontWeight: 700,
                    fontSize: 12,
                    borderRadius: "6px",
                    height: 26,
                    "& .MuiChip-icon": { ml: 0.75, mr: -0.25 },
                    "& .MuiChip-label": { px: 1 }
                  }}
                />
              )}
            </Stack>
          ))}
        </Box>

      </Box>

    </Box>
  )
}