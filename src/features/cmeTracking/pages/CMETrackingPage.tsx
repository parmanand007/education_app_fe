import { Grid, Box, CircularProgress, Typography } from "@mui/material";

import { useCMESummary, useCMEData } from "../api/cmeTracking.hooks";

import CMEHero from "../components/CMEHero";
import CMEClassificationCard from "../components/CMEClassificationCard";
import CMEYearCard from "../components/CMEYearCard";
import CMEChart from "../components/CMEChart";
import { buildCMEChartData } from "../../../shared/utils/cmeChart.utils";
import CMEAccreditationCard from "../components/CMEAccreditationCard";
import CMEInfoCard from "../components/CMEInfoCard";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function CMETrackingPage() {

  const { data: summary, isLoading } = useCMESummary();
  const { data: cmeData } = useCMEData();

  if (isLoading) return <CircularProgress />;

  const contestCredits =
    summary?.current_year_cme_classification.find(
      (x) => x.earned_at === "CONTEST"
    )?.cme_credits ?? 0;

  const programCredits =
    summary?.current_year_cme_classification.find(
      (x) => x.earned_at === "PROGRAMS"
    )?.cme_credits ?? 0;

  const chartData = buildCMEChartData(cmeData ?? []);

  return (
    <Box>

      <CMEHero />
      <Box
  display="flex"
  alignItems="center"
  gap={1}
  mb={2}
  color="primary.main"
>
  <Typography>Current Year CME</Typography>
  <InfoOutlinedIcon sx={{ fontSize: 16, opacity: 0.7 }} />
</Box>

      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 8 }}>

          <Grid container spacing={2}>

            <Grid size={{ xs: 6 }}>
              <CMEClassificationCard
                title="Tournament CME"
                value={contestCredits}
              />
            </Grid>

            <Grid size={{ xs: 6 }}>
              <CMEClassificationCard
                title="Program CME"
                value={programCredits}
              />
            </Grid>

          </Grid>

          <CMEChart data={chartData} />

        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>

          <CMEYearCard
            label="CURRENT YEAR"
            hours={summary?.current_year_cme_hours ?? 0}
          />

          <CMEYearCard
            label="2025"
            hours={summary?.last_year_cme_hours ?? 0}
          />

          <CMEAccreditationCard />

          <CMEInfoCard />

        </Grid>

      </Grid>

    </Box>
  );
}