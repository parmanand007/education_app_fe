import {
  Box,
  Typography,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useLearningPointDetails } from "../api/providerScorecard.hooks";

interface Props {
  learningPoint: string;
  dateRange: {
    start_date: string;
    end_date: string;
  };
  onClose: () => void;
}

export default function LearningPointDetails({
  learningPoint,
  dateRange,
  onClose
}: Props) {
  const { data, isLoading } = useLearningPointDetails({
    ...dateRange,
    learning_point: learningPoint
  });

  if (isLoading) return <Box p={3}>Loading...</Box>;

  const stats = data?.learning_stats_data;
  const user = stats?.user_data;
  const org = stats?.org_data;

  return (
    <Box sx={{ height: "100%", backgroundColor: "#fff" }}>
      {/* HEADER */}
      <Box
        px={3}
        py={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #e5e7eb"
      >
        <Box>
          <Typography fontWeight={700}>{learningPoint}</Typography>
          <Typography fontSize={12} color="text.secondary">
            Year to Date
          </Typography>
        </Box>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* BODY */}
      <Box p={3}>
        {/* OVERALL LEARNING CARD */}
        <Box
          sx={{
            border: "1px solid #e5e7eb",
            borderRadius: 0.5,
            p: 2,
            mb: 3
          }}
        >
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography fontWeight={600}>Overall Learning</Typography>
            <Typography fontSize={13} color="text.secondary">
              Overall Accuracy
            </Typography>
          </Box>

          {/* INFO */}
          <Box mb={2}>
            <Typography fontSize={12} color="text.secondary">
              My Org Average: {org?.accuracy ?? 0}%
            </Typography>
            <Typography fontSize={12} color="text.secondary">
              My Average: {user?.question_accuracy.accuracy ?? 0}%
            </Typography>
          </Box>

          {/* GRAPH PLACEHOLDER */}
          <Box
            sx={{
              height: 140,
              borderRadius: 2,
              background:
                "linear-gradient(to right, #fca5a5, #bfdbfe, #86efac)",
              opacity: 0.4,
              mb: 1
            }}
          />

          <Typography
            fontSize={11}
            color="text.secondary"
            display="flex"
            alignItems="center"
            gap={0.5}
          >
            <InfoOutlinedIcon sx={{ fontSize: 14 }} />
            Your Learning Score Compared to the Organization
          </Typography>
        </Box>

        {/* STATS SECTION */}
        <Box
          sx={{
            backgroundColor: "#eaf4fb",
            border: "1px solid #38bdf8",
            borderRadius: 0.5,
            p: 2,
            mb: 3
          }}
        >
          <Typography fontWeight={600} mb={2}>
            Learning Statistics for {learningPoint}
          </Typography>

          <Box display="flex" gap={2}>
            {/* Questions Answered */}
            <Box
              sx={{
                flex: 1,
                border: "1px solid #facc15",
                borderRadius: 0.5,
                p: 2,
                backgroundColor: "#fff7ed"
              }}
            >
              <Typography fontWeight={700}>
                {user?.question_answered.total_questions_answered}
              </Typography>
              <Typography fontSize={12} color="text.secondary">
                Questions answered
              </Typography>
            </Box>

            {/* Accuracy */}
            <Box
              sx={{
                flex: 1,
                border: "1px solid #22c55e",
                borderRadius: 0.5,
                p: 2,
                backgroundColor: "#ecfdf5"
              }}
            >
              <Typography fontWeight={700}>
                {user?.question_accuracy.accuracy}%
              </Typography>
              <Typography fontSize={12} color="text.secondary">
                Questions accuracy
              </Typography>
            </Box>

            {/* Org Avg */}
            <Box
              sx={{
                flex: 1,
                border: "1px solid #ef4444",
                borderRadius: 0.5,
                p: 2,
                backgroundColor: "#fef2f2"
              }}
            >
              <Typography fontWeight={700}>
                {org?.accuracy}%
              </Typography>
              <Typography fontSize={12} color="text.secondary">
                Org average
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* COMPLIANCE */}
        <Box
          sx={{
            border: "1px solid #facc15",
            backgroundColor: "#fef3c7",
            borderRadius: 0.5,
            p: 2,
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Typography fontWeight={600}>
            Compliance Target for the Learning Point
          </Typography>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography fontWeight={600}>
              {org?.target ?? 0}%
            </Typography>

            <Box
              sx={{
                fontSize: 11,
                px: 1,
                py: 0.3,
                borderRadius: 1,
                backgroundColor: "#fee2e2",
                color: "#dc2626"
              }}
            >
              Non-Compliant
            </Box>
          </Box>
        </Box>

        {/* MESSAGE */}
        <Box
          sx={{
            border: "1px solid #facc15",
            backgroundColor: "#fde68a",
            borderRadius: 0.5,
            p: 2
          }}
        >
          <Typography fontWeight={600} mb={0.5}>
            Keep Going!
          </Typography>

          <Typography fontSize={13} color="text.secondary">
            It looks like you're struggling with your recent assessments. Review the training more to boost your understanding.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}