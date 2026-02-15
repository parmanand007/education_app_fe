import { Box } from "@mui/material";
import { useContests } from "../api/contests.hooks";
import ContestCard from "./ContestCard";

export default function ContestGrid() {
  const { data } = useContests({ status: [0, 2, 3] });

  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",  // ← 5 per row like production
        },
      }}
    >
      {data?.results.map((contest) => (
        <ContestCard
          key={contest.questionnaire_id}
          contest={contest}
        />
      ))}
    </Box>
  );
}
