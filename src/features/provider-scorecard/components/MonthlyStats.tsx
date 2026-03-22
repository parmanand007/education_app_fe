import {
  Box,
  Typography,
  Chip
} from "@mui/material";

import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

export default function MonthlyStats({ month, targets }: any) {
  const stats = [
    {
      label: "Contest Participation",
      value: month.contest_participation,
      target: targets.tr_weekly_participation_target_data,
      icon: <EmojiEventsOutlinedIcon fontSize="small" />,
      isGood: month.contest_participation >= targets.tr_weekly_participation_target_data,
    },
    {
      label: "Question Accuracy",
      value: month.questions_accuracy,
      target: targets.tr_question_accuracy_target_data,
      icon: <CheckCircleOutlineIcon fontSize="small" />,
      isGood: month.questions_accuracy >= targets.tr_question_accuracy_target_data,
      isPercent: true,
    },
    {
      label: "Total questions answered",
      value: month.questions_answered,
      target: targets.tr_total_question_answered_target_data,
      icon: <Inventory2OutlinedIcon fontSize="small" />,
      isGood: month.questions_answered >= targets.tr_total_question_answered_target_data,
    },
    {
      label: "Videos Watched",
      value: month.videos_watched,
      target: targets.tr_video_watched_target_data,
      icon: <PlayCircleOutlineIcon fontSize="small" />,
      isGood: month.videos_watched >= targets.tr_video_watched_target_data,
    },
    {
      label: "Articles Read",
      value: month.articles_read,
      target: targets.tr_articles_read_target_data,
      icon: <MenuBookOutlinedIcon fontSize="small" />,
      isGood: month.articles_read >= targets.tr_articles_read_target_data,
    },
  ];

  return (
    <Box>
      {/* HEADER */}
      <Box display="flex" gap={1} mb={2}>
        <Chip label={`Missed: ${month.missed}`} sx={{ background: "#fee2e2", color: "#dc2626" }} />
        <Chip label={`Completed: ${month.completed}`} sx={{ background: "#dcfce7", color: "#15803d" }} />
        <Chip label={`Mar ${month.year}`} sx={{ background: "#e0f2fe", color: "#0284c7" }} />
      </Box>

      {/* ROWS */}
      {stats.map((item, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            border: item.isGood ? "1px solid #86efac" : "1px solid #e5e7eb",
            background: item.isGood ? "#ecfdf5" : "#fff",

            borderRadius: "10px",
            px: 3,
            py: 2,
            mb: 2,
          }}
        >
          {/* LEFT */}
          <Box display="flex" alignItems="center" gap={2}>
            {item.icon}
            <Typography fontSize={14}>{item.label}</Typography>
          </Box>

          {/* RIGHT */}
          <Box textAlign="right">
            <Typography fontWeight={700}>
              {item.isPercent ? `${item.value}%` : item.value}
            </Typography>

            <Typography fontSize={11} color="text.secondary">
              Achieved &nbsp;&nbsp; Target{" "}
              {item.isPercent ? `${item.target}%` : item.target}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}