import {
  Paper,
  Typography,
  Stack,
  Box,
  CircularProgress
} from "@mui/material"

import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import CheckIcon from "@mui/icons-material/Check"

import type { Chapter } from "../api/programs.types"


interface Props {
  chapters: Chapter[]
}

export default function ProgramModulesCard({ chapters }: Props) {

  return (

    <Paper
      sx={{
        p: 3,
        border: "1px solid 10px",
        borderColor: "divider"
      }}
    >

      <Typography fontWeight={600} mb={2}>
        Modules
      </Typography>

      <Stack spacing={2}>

        {chapters.map((chapter, index) => {

          const module = chapter.module_view?.[0]
          if (!module) return null

          const completed = chapter.is_completed
          const progress = chapter.progress ?? 0

          return (

            <Box
              key={chapter.chapter_id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                borderRadius: 2,
                backgroundColor: completed
                  ? "rgba(16,185,129,0.08)"
                  : "transparent"
              }}
            >

              {/* STEP NUMBER */}

              <Box
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: 1,
                  fontSize: 13,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  backgroundColor: completed
                    ? "#10b981"
                    : "#f59e0b"
                }}
              >
                {index + 1}
              </Box>



              {/* MODULE TEXT */}

              <Box sx={{ flex: 1 }}>

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "text.secondary"
                  }}
                >
                  {chapter.chapter_type === "CM"
                    ? "Certification"
                    : "Training"}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 14
                  }}
                >
                  {module.module_name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "text.secondary"
                  }}
                >
                  {module.description ?? ""}
                </Typography>

              </Box>



              {/* PLAY / COMPLETE BUTTON */}

              <Box
                sx={{
                  position: "relative",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >

                {!completed && (

                  <CircularProgress
                    variant="determinate"
                    value={progress}
                    size={40}
                    thickness={4}
                    sx={{
                      color: "#f59e0b"
                    }}
                  />

                )}

                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: completed
                      ? "#10b981"
                      : "#fff",
                    border: completed
                      ? "none"
                      : "1px solid #e5e7eb"
                  }}
                >

                  {completed ? (

                    <CheckIcon
                      sx={{
                        fontSize: 18,
                        color: "#fff"
                      }}
                    />

                  ) : (

                    <PlayArrowIcon
                      sx={{
                        fontSize: 18,
                        color: "#f59e0b"
                      }}
                    />

                  )}

                </Box>

              </Box>

            </Box>

          )
        })}

      </Stack>

    </Paper>
  )
}