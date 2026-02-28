import { Box, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import type { ReactNode } from "react";

interface Props {
  title?: string;
  description?: string;
  icon?: ReactNode;
}

export default function EmptyState({
  title = "Nothing here yet",
  description = "Content will appear here once it becomes available.",
  icon,
}: Props) {
  return (
    <Box
      sx={{
        mt: 3,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        py: 6,
        px: 3,
        textAlign: "center",
      }}
    >
      {icon ?? (
        <HelpOutlineIcon
          sx={{
            fontSize: 48,
            color: "text.disabled",
            mb: 2,
          }}
        />
      )}

      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 600,
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          color: "text.secondary",
          maxWidth: 520,
          mx: "auto",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}