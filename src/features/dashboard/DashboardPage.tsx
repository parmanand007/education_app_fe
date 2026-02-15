import { Box, Typography } from "@mui/material";
import ContestGrid from "../contests/components/ContestGrid";

export default function DashboardPage() {
  return (
    <Box sx={{ px: 4, py: 3 }}>
        <Typography
            variant="h5"
            sx={{ fontWeight: 600, mb: 1 }}
        >
            Welcome, Parmanand
        </Typography>

        <Typography
            sx={{ fontWeight: 600, mb: 3 }}
        >
            Tailored <span style={{ color: "primary.main" }}>Content</span> for you
        </Typography>

        <ContestGrid />
        </Box>

  );
}
