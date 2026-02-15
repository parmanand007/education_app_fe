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

function formatDate(dateString: string) {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${formattedDate} | ${formattedTime}`;
}

export default function ContestCard({ contest }: Props) {
  const statusLabel = statusMap[contest.status];

  return (
    <Box
    sx={{
        backgroundColor: (theme) => theme.palette.brand.light,
        border: "1px solid #9fd6ee",
        borderBottom: "6px solid #7dcbe6",
        borderRadius: 1.5,
        padding: 3,
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
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor: "#a9ddf2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EmojiEventsOutlinedIcon sx={{ fontSize: 35 }} />
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
          mt: 1,
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#133e63",
          color: "#fff",
          px: 1.5,
          py: 0.5,
          borderRadius: 0.5,
          fontSize: 12,
          fontWeight: 500,
        }}
      >
        ✨ Custom Contest
      </Box>

      {/* Title */}
      <Typography
        sx={{
          mt: 1,
          fontWeight: 600,
          fontSize: 15,
        }}
      >
        Tailored Contest
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
          {formatDate(contest.start_date)}
        </Typography>
      </Box>
    </Box>
  );
}
