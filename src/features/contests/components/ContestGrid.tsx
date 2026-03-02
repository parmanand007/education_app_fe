import { Box, Typography, CircularProgress } from "@mui/material";
import { Contest } from "../api/contests.types";
import ContestCard from "./ContestCard";

interface Props {
  contests: Contest[];
  loading: boolean;
}

export default function ContestGrid({
  contests,
  loading,
}: Props) {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!contests.length) {
    return (
      <Typography mt={4}>
        No contests found.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        },
      }}
    >
      {contests.map((contest) => (
        <ContestCard
          key={contest.questionnaire_id}
          contest={contest}
        />
      ))}
    </Box>
  );
}