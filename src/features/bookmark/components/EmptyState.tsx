import { Box, Typography } from "@mui/material"

export default function EmptyState() {

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 10,
      }}
    >

      <Typography variant="h6">
        You haven't Bookmarked a Question
      </Typography>

      <Typography color="text.secondary">
        It looks like you haven't bookmarked a question
        that matches selected filter.
      </Typography>

    </Box>
  )
}