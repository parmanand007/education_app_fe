import { Box, Typography, Skeleton } from "@mui/material";
import ProgramCard from "./ProgramCard";
import EmptyState from "./EmptyState";
import type { Program } from "../api/programs.types";

interface Props {
  title: string;
  programs?: Program[];
  isLoading?: boolean;
}

export default function ProgramSection({
  title,
  programs = [],
  isLoading = false,
}: Props) {
  return (
    <Box sx={{ mb: 5 }}>
      {/* Section Title */}
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 600,
          mb: 2,
        }}
      >
        {title}
      </Typography>

      {/* Loading State */}
      {isLoading && (
        <Box sx={{ display: "flex", gap: 3 }}>
          {[1, 2, 3].map((i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width={280}
              height={180}
              sx={{ borderRadius: 3 }}
            />
          ))}
        </Box>
      )}

      {/* Empty State */}
      {!isLoading && programs.length === 0 && (
        <EmptyState
        title={`No ${title}`}
        description={`There are no ${title.toLowerCase()} available at the moment.`}
      />
      )}

      {/* Program Cards */}
      {!isLoading && programs.length > 0 && (
        <Box
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            pb: 1,
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {programs.map((program) => (
            <Box
              key={program.program_id}
              sx={{
                minWidth: 280,
                maxWidth: 280,
                flexShrink: 0,
              }}
            >
              <ProgramCard program={program} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}