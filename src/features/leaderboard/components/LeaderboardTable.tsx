import {
  Box,
  Avatar,
  Typography,
  Paper,
} from "@mui/material";
import { LeaderboardEntry } from "../api/leaderboard.types";
import LeaderboardEmpty from "./LeaderboardEmpty";

interface Props {
  data: LeaderboardEntry[];
}

export default function LeaderboardTable({ data }: Props) {
  const renderMedal = (rank: number) => {
    if (rank === 1) {
      return (
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#F4B740",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            color: "#fff",
            fontSize: 14,
          }}
        >
          1
        </Box>
      );
    }

    return <Typography fontWeight={600}>{rank}</Typography>;
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid #D0D5DD",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "120px 1.5fr 1fr 180px",
          backgroundColor: "#F2F4F7",
          borderBottom: "1px solid #D0D5DD",
        }}
      >
        {["# Rank", "Name", "Reaction", "Total Points"].map(
          (title) => (
            <Box
              key={title}
              sx={{
                px: 3,
                py: 2,
                fontWeight: 600,
                fontSize: 14,
                borderRight:
                  title !== "Total Points"
                    ? "1px solid #D0D5DD"
                    : "none",
              }}
            >
              {title}
            </Box>
          )
        )}
      </Box>

      {/* Empty State */}
      {data.length === 0 && (
        <Box
          sx={{
            py: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LeaderboardEmpty />
        </Box>
      )}

      {/* Rows */}
      {data.map((row) => {
        const fullName =
          row.user.privacy_mode && row.user.anonymous_name
            ? row.user.anonymous_name
            : `${row.user.first_name} ${row.user.last_name}`;

        const avatarSrc =
          row.user.profile_image ??
          row.user.avatar_url ??
          undefined;

        const reactions = Object.entries(
          row.total_reactions
        ).filter(([, count]) => count > 0);

        return (
          <Box
            key={row.rank_id}
            sx={{
              display: "grid",
              gridTemplateColumns:
                "120px 1.5fr 1fr 180px",
              alignItems: "center",
              borderBottom: "1px solid #D0D5DD",
              backgroundColor: "#fff",
            }}
          >
            {/* Rank */}
            <Box
              sx={{
                px: 3,
                py: 2.5,
                borderRight: "1px solid #D0D5DD",
              }}
            >
              {renderMedal(row.rank)}
            </Box>

            {/* Name */}
            <Box
              sx={{
                px: 3,
                py: 2.5,
                display: "flex",
                alignItems: "center",
                gap: 2,
                borderRight: "1px solid #D0D5DD",
              }}
            >
              <Avatar
                src={avatarSrc}
                sx={{
                  width: 44,
                  height: 44,
                  backgroundColor: "#E5E7EB",
                }}
              />

              <Typography fontWeight={500}>
                {fullName}
              </Typography>
            </Box>

            {/* Reaction */}
            <Box
              sx={{
                px: 3,
                py: 2.5,
                display: "flex",
                alignItems: "center",
                gap: 2,
                borderRight: "1px solid #D0D5DD",
              }}
            >
              {reactions.length > 0 ? (
                reactions.map(([emoji, count]) => (
                  <Box
                    key={emoji}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      fontSize: 14,
                    }}
                  >
                    <Typography>{emoji}</Typography>

                    <Typography fontWeight={500}>
                      {count}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography
                  color="text.secondary"
                  fontSize={14}
                >
                  —
                </Typography>
              )}
            </Box>

            {/* Points */}
            <Box
              sx={{
                px: 3,
                py: 2.5,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#4EA8DE,#3A86FF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 12,
                }}
              >
                TP
              </Box>

              <Typography fontWeight={500}>
                {row.assignment_score} Pts
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Paper>
  );
}