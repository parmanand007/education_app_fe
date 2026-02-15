import { Box, Typography } from "@mui/material";
import ContestGrid from "../components/ContestGrid";

export default function ContestsPage() {
  return (
    <Box>
      <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 3 }}>
        My Contests
      </Typography>

      <ContestGrid />
    </Box>
  );
}
