import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CMEHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mb: 3,
        p: 3,
        borderRadius: 1,
        background: "#dceaf2",
      }}
    >
      <Typography variant="h5" sx={{ mb: 1 }}>
        Track Your Continuing Medical Education (CME)
      </Typography>

      <Typography variant="body2">
        Stay on top of your professional growth. Monitor your CME credits
        earned through tournaments and educational programs throughout the
        year.
      </Typography>
    </Box>
  );
}