import { Box, Typography, Stack } from "@mui/material"
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined"

export default function HeroSection({ wallet }: any) {

  return (
    <Box
      sx={{
        background: "#E8C17C",
        borderRadius: "24px",
        px: 4,
        py: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >

      <Box>

        <Typography fontWeight={700} fontSize={24}>
          DT Points System
        </Typography>

        <Typography sx={{ mt: 0.5, color: "#374151" }}>
          Track your DT Points and contest details effortlessly with our comprehensive dashboard.
        </Typography>

          <Stack
  direction="row"
  mt={2}
  borderRadius={1}
  sx={{
    border: "1px solid rgba(255,255,255,0.6)",
    overflow: "hidden",
    width: "fit-content"
  }}
>


          <StatBox label="AVAILABLE POINTS" value={wallet.total_earned_points} />
          <StatBox label="LIFETIME EARNED" value={wallet.lifetime_balance} />
          <StatBox label="BADGE EARNED" value={wallet.badges_count} />

        </Stack>

        <Typography
          sx={{
            mt: 1.5,
            fontSize: 14,
            color: "#1D4ED8",
            cursor: "pointer"
          }}
        >
          View Point History ↗
        </Typography>

      </Box>

      <PaidOutlinedIcon sx={{ fontSize: 130, opacity: 0.25 }} />

    </Box>
  )
}

function StatBox({ label, value }: any) {

  return (
    <Box
      sx={{
        border: "1px solid rgba(255,255,255,0.6)",
        px: 3,
        py: 1.5,
        borderRight: "none",
        "&:last-child": {
          borderRight: "1px solid rgba(255,255,255,0.6)"
        },
        boxShadow: `0 3px 0 rgba(255,255,255,0.6)`
      }}
    >

      <Typography fontSize={11}>{label}</Typography>
      <Typography fontWeight={700}>{value}</Typography>

    </Box>
  )
}