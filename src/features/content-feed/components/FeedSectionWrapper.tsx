import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  children: React.ReactNode;
  viewAll?: boolean;
}

export default function FeedSectionWrapper({
  title,
  children,
  viewAll = true,
}: Props) {
  return (
    <Box sx={{ mb: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
          {title}
        </Typography>

        {viewAll && (
          <Typography
            sx={{
              fontSize: 14,
              color: "primary.main",
              cursor: "pointer",
            }}
          >
            View All
          </Typography>
        )}
      </Box>

      {children}
    </Box>
  );
}