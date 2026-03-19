import {
  Box,
  Grid,
  Typography,
  Paper
} from "@mui/material"

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined"

import type { ProgramResult } from "../api/programs.types"

interface Props {
  result: ProgramResult
}

export default function ProgramResultSection({ result }: Props) {

  const correct = result.total_correct_answers
  const total = result.total_questions

  const percentage =
    total > 0 ? (correct / total) * 100 : 0

  return (

    <Grid container spacing={3} alignItems="stretch">

      {/* LEFT CARD */}
      <Grid size={{ xs: 12, md: 4 }}>

        <Paper
          sx={{
            p: 3,
            backgroundColor: "brand.light",
            borderRadius: 3,
            textAlign: "center",
            height: "100%"
          }}
        >

          {/* DONUT */}
          <Box
            sx={{
              position: "relative",
              width: 140,
              height: 140,
              mx: "auto",
              mb: 2
            }}
          >

            {/* OUTER RING */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: `conic-gradient(
                  #22c55e 0% ${percentage}%,
                  #ef4444 ${percentage}% 100%
                )`
              }}
            />

            {/* INNER CIRCLE */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Typography fontWeight={600} fontSize={16}>
                {correct}/{total}
              </Typography>

              <Typography fontSize={11} color="text.secondary">
                Correct Answers
              </Typography>
            </Box>

          </Box>

          {/* PROGRAM NAME */}
          <Typography fontWeight={600} mb={1}>
            {result.program_name}
          </Typography>

          {/* CONSTANT TEXT */}
          <Typography fontSize={13} color="text.secondary">
            You have successfully completed the program
          </Typography>

        </Paper>

      </Grid>

      {/* RIGHT SECTION */}
      <Grid size={{ xs: 12, md: 8 }}>

        {/* HEADER + RATING */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >

          <Typography fontSize={20} fontWeight={600}>
            Program Summary
          </Typography>

          {/* RATING */}
          <Box
            sx={{
              px: 2,
              py: 0.8,
              borderRadius: 2,
              border: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "#fff"
            }}
          >
            <Typography fontSize={13}>
              Rate this program
            </Typography>

            <Box display="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: 16,
                    color: "#d1d5db",
                    cursor: "pointer"
                  }}
                >
                  ★
                </Typography>
              ))}
            </Box>
          </Box>

        </Box>

        {/* DATE */}
        <Typography color="text.secondary" mb={2}>
          Summary of Program completed on{" "}
          {new Date(result.completed_date).toLocaleString()}
        </Typography>

        {/* STATS */}
        <Grid container spacing={2}>

          {/* TOTAL QUESTIONS */}
          <Grid size={4}>
            <Paper
              sx={{
                p: 2,
                border: "1px solid #fecaca",
                backgroundColor: "#fef2f2"
              }}
            >
              <Box display="flex" alignItems="center" gap={1.5} mb={1}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "#fee2e2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <DescriptionOutlinedIcon
                    sx={{ color: "#ef4444", fontSize: 20 }}
                  />
                </Box>

                <Typography fontWeight={600}>
                  {total}
                </Typography>
              </Box>

              <Typography fontSize={12} color="text.secondary">
                Total Questions
              </Typography>
            </Paper>
          </Grid>

          {/* CORRECT ANSWERS */}
          <Grid size={4}>
            <Paper
              sx={{
                p: 2,
                border: "1px solid #86efac",
                backgroundColor: "#f0fdf4"
              }}
            >
              <Box display="flex" alignItems="center" gap={1.5} mb={1}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "#dcfce7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{ color: "#22c55e", fontSize: 20 }}
                  />
                </Box>

                <Typography fontWeight={600}>
                  {correct}
                </Typography>
              </Box>

              <Typography fontSize={12} color="text.secondary">
                Correct Answers
              </Typography>
            </Paper>
          </Grid>

          {/* MODULES */}
          <Grid size={4}>
            <Paper
              sx={{
                p: 2,
                border: "1px solid #7dd3fc",
                backgroundColor: "#f0f9ff"
              }}
            >
              <Box display="flex" alignItems="center" gap={1.5} mb={1}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "#e0f2fe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <LayersOutlinedIcon
                    sx={{ color: "#0ea5e9", fontSize: 20 }}
                  />
                </Box>

                <Typography fontWeight={600}>
                  {result.modules_completed}/{result.modules_count}
                </Typography>
              </Box>

              <Typography fontSize={12} color="text.secondary">
                Modules Completed
              </Typography>
            </Paper>
          </Grid>

        </Grid>

      </Grid>

    </Grid>
  )
}