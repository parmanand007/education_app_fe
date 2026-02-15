import { Box, Typography } from "@mui/material";
import ProgramCard from "./ProgramCard";
import type { Program } from "../api/programs.types";

interface Props {
  title: string;
  programs?: Program[];
}

export default function ProgramSection({ title, programs }: Props) {
  if (!programs || programs.length === 0) return null;

  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 600,
          mb: 2,
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            pb: 1,
            scrollBehavior: "smooth",

            /* Hide scrollbar - Chrome, Safari, Edge */
            "&::-webkit-scrollbar": {
            display: "none",
            },

            /* Hide scrollbar - Firefox */
            scrollbarWidth: "none",

            /* Hide scrollbar - IE */
            msOverflowStyle: "none",
        }}
        >
        {programs.map((program) => (
          <Box
            key={program.program_id}
            sx={{
              minWidth: 280,  // controls card width
              maxWidth: 280,
              flexShrink: 0,
            }}
          >
            <ProgramCard program={program} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
