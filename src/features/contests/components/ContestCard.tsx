import { Box, Typography, Chip, useTheme } from "@mui/material";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import type { Contest } from "../api/contests.types";
import { useNavigate } from "react-router-dom"

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

  return date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function getStatusStyles(status: number) {
  switch (status) {
    case 0:
      return {
        bg: "rgba(234, 179, 8, 0.08)",
        border: "rgba(234, 179, 8, 0.3)",
        bottom: "rgba(234, 179, 8, 0.6)",
        chipBg: "rgba(234, 179, 8, 0.15)",
        chipColor: "#a16207",
      };
    case 3:
      return {
        bg: "rgba(34, 197, 94, 0.08)",
        border: "rgba(34, 197, 94, 0.3)",
        bottom: "rgba(34, 197, 94, 0.6)",
        chipBg: "rgba(34, 197, 94, 0.15)",
        chipColor: "#166534",
      };
    case 1:
      return {
        bg: "rgba(239, 68, 68, 0.08)",
        border: "rgba(239, 68, 68, 0.3)",
        bottom: "rgba(239, 68, 68, 0.6)",
        chipBg: "rgba(239, 68, 68, 0.15)",
        chipColor: "#991b1b",
      };
    default:
      return {
        bg: "#f5f5f5",
        border: "#e5e7eb",
        bottom: "#d1d5db",
        chipBg: "#e5e7eb",
        chipColor: "#374151",
      };
  }
}

export default function ContestCard({ contest }: Props) {
  const theme = useTheme();
  const navigate = useNavigate()
  const statusLabel = statusMap[contest.status];
  const styles = getStatusStyles(contest.status);

  return (
    <Box
    onClick={() => navigate(`/contests/${contest.questionnaire_id}`)}
      sx={{
        backgroundColor: styles.bg,
        border: `1px solid ${styles.border}`,
        borderBottom: `10px solid ${styles.bottom}`,
        borderRadius: 1.5,
        p: 3,
        width: 300,
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
        },
      }}
    >
      {/* Top Row */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Trophy + Assignment Type */}
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: theme.palette.background.paper,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EmojiEventsOutlinedIcon
              sx={{ fontSize: 30, color: theme.palette.text.primary }}
            />
          </Box>

          {/* Assignment Type Tag (Attached to Circle) */}
          <Box
            sx={{
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: theme.palette.brand.tag,
              color: "#fff",
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              fontSize: 11,
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            {contest.assignment_type}
          </Box>
        </Box>

        <Chip
          label={statusLabel}
          size="small"
          sx={{
            backgroundColor: styles.chipBg,
            color: styles.chipColor,
            fontSize: 11,
          }}
        />
      </Box>

      {/* Title */}
      <Typography
        sx={{
          mt: 4,
          fontWeight: 600,
          fontSize: 15,
          color: theme.palette.text.primary,
        }}
      >
        Contest Questions
      </Typography>

      {/* Questions */}
      <Box sx={{ mt: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
        <AccessTimeOutlinedIcon
          sx={{ fontSize: 14, color: theme.palette.text.secondary }}
        />
        <Typography sx={{ fontSize: 13, color: theme.palette.text.secondary }}>
          {contest.current_submission?.total_questions_answered ?? 0} Questions
        </Typography>
      </Box>

      {/* Date */}
      <Box sx={{ mt: 0.5, display: "flex", alignItems: "center", gap: 1 }}>
        <CalendarTodayOutlinedIcon
          sx={{ fontSize: 14, color: theme.palette.text.secondary }}
        />
        <Typography sx={{ fontSize: 13, color: theme.palette.text.secondary }}>
          {formatDate(contest.start_date)}
        </Typography>
      </Box>
    </Box>
  );
}