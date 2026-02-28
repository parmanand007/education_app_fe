import { Box, Typography } from "@mui/material";
import ContestGrid from "../contests/components/ContestGrid";
import ProgramSection from "../programs/components/ProgramSection";
import { usePrograms } from "../programs/api/programs.hooks";
import TipOfTheDay from "./TipOfTheDay";
import CMEAccreditation from "./CMEAccreditation";

export default function DashboardPage() {
  const { data, isLoading } = usePrograms();
  const programs = data?.results ?? [];

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
        <ContestGrid />
      </Box>

      {/* Program Section */}
      <ProgramSection
        title="My Programs"
        programs={programs}
      />
      
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