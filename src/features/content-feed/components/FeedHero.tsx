import { Box, Typography } from "@mui/material";

export default function FeedHero() {
  return (
    <Box
      sx={{
        backgroundColor: "#D7EAF3",
        borderRadius: 1,
        p: 4,
        mb: 5,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 700,
          mb: 1,
        }}
      >
        Content Feed
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          color: "text.secondary",
          maxWidth: 600,
        }}
      >
        Dive into our comprehensive content library and discover new resources to enhance your learning.
      </Typography>

      {/* Right illustration placeholder */}
      <Box
        sx={{
          position: "absolute",
          right: 40,
          bottom: 20,
          width: 140,
          height: 100,
          backgroundColor: "#B8D9E8",
          borderRadius: 3,
        }}
      />
    </Box>
  );
}