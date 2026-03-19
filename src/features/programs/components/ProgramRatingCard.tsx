import { Box, Paper, Typography } from "@mui/material"

export default function ProgramRatingCard() {

  return (

    <Paper
      sx={{
        p: 2,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >

      <Typography fontSize={14} fontWeight={500}>
        Rate this program
      </Typography>

      {/* Simple stars (replace later with real rating) */}
      <Box sx={{ display: "flex", gap: 0.5 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Typography
            key={i}
            sx={{
              cursor: "pointer",
              fontSize: 18,
              color: "#d1d5db"
            }}
          >
            ★
          </Typography>
        ))}
      </Box>

    </Paper>
  )
}