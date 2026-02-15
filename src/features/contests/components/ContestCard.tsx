import { Box, Typography, Chip } from "@mui/material";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import type { Contest } from "../api/contests.types";

interface Props {
  contest: Contest;
}

const statusMap: Record<number, string> = {
  0: "Ongoing",
  1: "Expired",
  2: "Redeemed",
  3: "Completed",
};

export default function ContestCard({ contest }: Props) {
  const statusLabel = statusMap[contest.status];

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.brand.light,
        border: (theme) => `2px solid ${theme.palette.brand.muted}`,
        borderRadius: 1,
        padding: 3,
        position: "relative",
        transition: "all 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* Top Row */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            backgroundColor: (theme) => theme.palette.brand.muted,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EmojiEventsOutlinedIcon sx={{ fontSize: 22 }} />
        </Box>

        <Chip
          label={statusLabel}
          size="small"
          sx={{
            backgroundColor: "#1ea7d7",
            color: "#fff",
            fontSize: 11,
            height: 24,
          }}
        />
      </Box>

      {/* Custom Contest Badge */}
      <Box
        sx={{
          mt: 2,
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#133e63",
          color: "#fff",
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          fontSize: 12,
          fontWeight: 500,
        }}
      >
        ✨ Custom Contest
      </Box>

      {/* Title */}
      <Typography
        sx={{
          mt: 2,
          fontWeight: 600,
          fontSize: 15,
        }}
      >
        {contest.title}
      </Typography>

      {/* Meta */}
      <Box sx={{ mt: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
        <AccessTimeOutlinedIcon sx={{ fontSize: 14, color: "#6b7280" }} />
        <Typography sx={{ fontSize: 13, color: "#6b7280" }}>
          {contest.current_submission?.total_questions_answered || 0} Questions
        </Typography>
      </Box>

      <Box sx={{ mt: 0.5, display: "flex", alignItems: "center", gap: 1 }}>
        <CalendarTodayOutlinedIcon sx={{ fontSize: 14, color: "#ef4444" }} />
        <Typography sx={{ fontSize: 13, color: "#6b7280" }}>
          {new Date(contest.start_date).toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
}
