import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import dayjs from "dayjs";

interface Props {
  name: string;
  startDate: string;
  endDate: string;
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  variant?: "contest" | "leaderboard";
  action?: React.ReactNode;
}

export default function TournamentHero({
  name,
  startDate,
  endDate,
  currentIndex,
  total,
  onPrev,
  onNext,
  variant = "contest",
  action,
}: Props) {
  const formattedStart = dayjs(startDate).format("DD MMM, YYYY");
  const formattedEnd = dayjs(endDate).format("DD MMM, YYYY");

  const isLeaderboard = variant === "leaderboard";

  return (
    <Box
      sx={{
        backgroundColor: isLeaderboard ? "#dceaf2" : "#e8c27a",
        borderRadius: 2,
        p: 5,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Action (Filter Button) */}
      {action && (
        <Box
          sx={{
            position: "absolute",
            top: 24,
            right: 24,
          }}
        >
          {action}
        </Box>
      )}

      {/* Header */}
      <Typography variant="h5" fontWeight={700}>
        {isLeaderboard ? "My Leaderboard" : "Tournament & Contests"}
      </Typography>

      <Typography mt={1} color="text.secondary">
        {isLeaderboard
          ? "Your personal dashboard for tournaments and contests. Track rankings, compare scores with peers, and share reactions in real time."
          : "Track your tournament and contest details effortlessly with our comprehensive dashboard."}
      </Typography>

      {/* Tournament Row */}
      <Box
        mt={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Box display="flex" alignItems="center" gap={1}>
            <InfoOutlinedIcon sx={{ fontSize: 16, opacity: 0.7 }} />

            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              TOURNAMENT
            </Typography>
          </Box>

          <Typography mt={0.5} fontWeight={700}>
            {name}
          </Typography>
        </Box>

        {/* Pagination */}
        <Box display="flex" alignItems="center">
          <IconButton
            onClick={onPrev}
            disabled={currentIndex === 1}
            size="small"
          >
            <ChevronLeftIcon fontSize="small" />
          </IconButton>

          <Typography mx={1} fontWeight={600}>
            {currentIndex} / {total}
          </Typography>

          <IconButton
            onClick={onNext}
            disabled={currentIndex === total}
            size="small"
          >
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Info Container */}
      <Box
        mt={3}
        sx={{
          display: "flex",
          backgroundColor: isLeaderboard ? "#edf5f9" : "#efd6a1",
          borderRadius: 2,
          overflow: "hidden",
          width: "fit-content",
          borderTop: "1px solid rgba(255,255,255,0.9)",
          borderLeft: "1px solid rgba(255,255,255,0.9)",
          borderRight: "1px solid rgba(255,255,255,0.9)",
          boxShadow: "0 3px 0 rgba(255,255,255,0.9)",
        }}
      >
        <InfoBlock
          title="TOURNAMENT STARTED ON:"
          value={formattedStart}
        />

        <DividerBlock />

        <InfoBlock
          title="TOURNAMENT CLOSE ON:"
          value={formattedEnd}
        />

        <DividerBlock />

        <InfoBlock
          title="CURRENT PROGRESS"
          value="Week 1 of 5"
        />
      </Box>

      {/* Note */}
      <Typography
        mt={3}
        variant="caption"
        sx={{ opacity: 0.8 }}
      >
        Note: This configuration dates are managed by org admins
      </Typography>
    </Box>
  );
}

function InfoBlock({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <Box
      sx={{
        px: 3,
        py: 2,
        minWidth: 220,
      }}
    >
      <Typography
        variant="caption"
        sx={{ opacity: 0.7 }}
      >
        {title}
      </Typography>

      <Typography fontWeight={700}>
        {value}
      </Typography>
    </Box>
  );
}

function DividerBlock() {
  return (
    <Box
      sx={{
        width: "1px",
        backgroundColor: "rgba(255,255,255,0.8)",
      }}
    />
  );
}