import { Box, Typography } from "@mui/material";

export default function TipOfTheDay({ description }: { description: string }) {
  return (
    <Box
      sx={{
        backgroundColor: "#D7EAF3",
        borderRadius: "28px",
        padding: "48px",
        minHeight: 260,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: 22,
          fontWeight: 700,
          color: "#1380B9",
          mb: 2,
        }}
      >
        Tip of the Day
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          color: "#1F2937",
          maxWidth: 520,
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>

      <Box
        sx={{
          position: "absolute",
          right: 40,
          bottom: 24,
          width: 160,
          height: 120,
          borderRadius: 4,
          backgroundColor: "#B8D9E8",
        }}
      />
    </Box>
  );
}