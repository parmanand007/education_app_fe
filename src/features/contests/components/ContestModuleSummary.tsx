import { Box, Typography, CircularProgress } from "@mui/material"
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import { useWalletLevel } from "../api/contests.hooks"

export default function ContestModuleSummary() {
  const { data, isLoading } = useWalletLevel()

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" py={3}>
        <CircularProgress size={20} />
      </Box>
    )
  }

  const completedLevel = data?.current_level ?? 0

  return (
    <Box
      sx={{
        backgroundColor: "#e9e5dc",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        px: 3,
        py: 3,
        display: "flex",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: "#d7edf7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <EmojiEventsOutlinedIcon sx={{ fontSize: 28 }} />
      </Box>

      <Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography fontWeight={700}>
            {completedLevel} Contest module completed!
          </Typography>
          <InfoOutlinedIcon sx={{ fontSize: 16, opacity: 0.6 }} />
        </Box>

        <Box
          mt={1}
          sx={{
            width: 35,
            height: 35,
            borderRadius: "50%",
            border: "2px solid #e3b34a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
          }}
        >
          01
        </Box>
      </Box>
    </Box>
  )
}