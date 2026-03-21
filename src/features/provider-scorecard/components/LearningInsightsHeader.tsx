import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function LearningInsightsHeader() {
    const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "brand.light",
        borderRadius: 0.5,
        px: 4,
        py: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      {/* LEFT SECTION */}
      <Box>
        {/* Back */}
        <Box display="flex" alignItems="center" onClick={() => navigate(-1)} mb={1}>
          <IconButton size="small"  >
            <ArrowBackIcon fontSize="small" />
          </IconButton>

          <Typography fontSize={13} color="brand.dark" fontWeight={500}>
            Back to Provider Scorecard
          </Typography>
        </Box>

        {/* Title */}
        <Typography fontSize={22} fontWeight={700} mb={0.5}>
          Learning Insights
        </Typography>

        {/* Subtitle */}
        <Typography fontSize={13} color="text.secondary">
          Track your learning progress, accuracy, and improvement areas with detailed performance insights.
        </Typography>
      </Box>

      {/* RIGHT ILLUSTRATION */}
      <Box
        component="img"
        src="/images/learning-insights.png" // replace with your asset
        alt="Learning Insights"
        sx={{
          height: 80,
          objectFit: "contain",
          display: { xs: "none", md: "block" }
        }}
      />
    </Box>
  );
}