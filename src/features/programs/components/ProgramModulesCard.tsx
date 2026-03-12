import {
  Paper,
  Typography,
  Stack,
  Box,
  LinearProgress
} from "@mui/material"

import type { Chapter } from "../api/programs.types"

interface Props {
  chapters: Chapter[]
}

export default function ProgramModulesCard({ chapters }: Props) {

  return (

    <Paper sx={{ p: 3 }}>

      <Typography variant="h6" mb={2}>
        Modules
      </Typography>

      <Stack spacing={2}>

        {chapters.map((chapter, index) => {

          const module = chapter.module_view?.[0]

          if (!module) return null

          return (

            <Box key={chapter.chapter_id}>

              <Typography fontWeight={600}>
                {index + 1}. {module.module_name}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {module.description ?? ""}
              </Typography>

              <LinearProgress
                variant="determinate"
                value={chapter.progress ?? 0}
                sx={{ mt: 1 }}
              />

            </Box>

          )
        })}

      </Stack>

    </Paper>

  )
}