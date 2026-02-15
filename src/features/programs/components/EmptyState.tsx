// EmptyState.tsx
import { Box, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function EmptyState() {
  return (
    <Box
      sx={{
        mt: 3,
        borderRadius: 2,
        border: "1px solid #e5e7eb",
        backgroundColor: "background.paper",
        py: 6,
        px: 3,
        textAlign: "center",
      }}
    >
      <HelpOutlineIcon
        sx={{
          fontSize: 48,
          color: "#94a3b8",
          mb: 2,
        }}
      />

      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 600,
          color: "#0f2f44",
          mb: 1,
        }}
      >
        No Programs Completed!
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          color: "text.secondary",
          maxWidth: 520,
          margin: "0 auto",
        }}
      >
        You have not completed any programs yet. Keep going!
        Your progress will be displayed here once you complete a program.
      </Typography>
    </Box>
  );
}
