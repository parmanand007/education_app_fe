import { Box, Typography } from "@mui/material";

export default function LeaderboardEmpty() {
  return (
    <Box textAlign="center" py={8}>
      <Typography fontWeight={600} mb={1}>
        Leaderboard Unavailable
      </Typography>
      <Typography color="text.secondary">
        No Contest Assignment Available. Please update the filter.
      </Typography>
    </Box>
  );
}