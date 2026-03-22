import { Box, Typography, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function LearningProgressHeader() {
  const theme = useTheme();
  const navigate = useNavigate();
   const handleBack = () => {
    navigate(-1);
  };


  return (
    <Box
      sx={{
        background: theme.palette.brand.light,
        borderRadius: 0.5,
        p: 3,
        mb: 3,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box display="flex" alignItems="center" gap={1} mb={1} onClick={handleBack}>
          <ArrowBackIcon fontSize="small" />
          <Typography fontSize={13}>
            Back to Provider Scorecard
          </Typography>
        </Box>

        <Typography fontSize={22} fontWeight={700}>
          Learning Progress
        </Typography>

        <Typography fontSize={13} color="text.secondary">
          Review and track your yearly performance for growth
        </Typography>
      </Box>

      <Box
        sx={{
          width: 120,
          height: 80,
          background: theme.palette.brand.muted,
          borderRadius: 2,
        }}
      />
    </Box>
  );
}