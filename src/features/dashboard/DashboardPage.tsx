import { Box, Typography } from "@mui/material";
import ContestGrid from "../contests/components/ContestGrid";
import ProgramSection from "../programs/components/ProgramSection";
import { usePrograms } from "../programs/api/programs.hooks";
import { useContests } from "../contests/api/contests.hooks";
import TipOfTheDay from "./TipOfTheDay";
import CMEAccreditation from "./CMEAccreditation";

export default function DashboardPage() {
  /* Programs */
  const { data: programData } = usePrograms();
  const programs = programData?.results ?? [];

  /* Contests without tournament */
  const { data: contestData, isLoading: contestLoading } =
    useContests({
      page: 1,
      page_size: 5, // limit for dashboard
    });

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Welcome, Parmanand
        </Typography>

        <Typography sx={{ fontWeight: 600, mt: 1 }}>
          Tailored{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Content
          </Box>{" "}
          for you
        </Typography>
      </Box>

      {/* Contest Section */}
      <Box sx={{ mb: 5 }}>
        <Typography
          sx={{ fontSize: 20, fontWeight: 600, mb: 2 }}
        >
          My Contests
        </Typography>

        <ContestGrid
          contests={contestData?.results ?? []}
          loading={contestLoading}
        />
      </Box>

      {/* Program Section */}
      <ProgramSection
        title="My Programs"
        programs={programs}
      />

      {/* Bottom Grid */}
      <Box sx={{ mt: 6 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 3,
            alignItems: "stretch",
          }}
        >
          <TipOfTheDay
            description="Medicare will reimburse annual wellness billed with G0402/G0438/G0439 visits but will not cover annual physicals billed with 99387/99397"
          />

          <CMEAccreditation
            description="CME Accreditation ensures high-quality, relevant healthcare education, supporting ongoing professional development for providers."
          />
        </Box>
      </Box>
    </Box>
  );
}