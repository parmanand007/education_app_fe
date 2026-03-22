import { Box, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";

import { useLearningProgress } from "../api/providerScorecard.hooks";

import LearningProgressHeader from "../components/LearningProgressHeader";
import KPISection from "../components/KPISection";
import MonthlyTabs from "../components/MonthlyTabs";
import MonthlyStats from "../components/MonthlyStats";

export default function LearningProgressPage() {
  const { performance, isLoading } = useLearningProgress();

  const [selectedIndex, setSelectedIndex] = useState(0);

  // set default month AFTER data loads
  useEffect(() => {
    if (!performance) return;

    const index = performance.months_status.findIndex(
      (m) => m.status === 0 || m.status === 1
    );

    setSelectedIndex(index !== -1 ? index : 0);
  }, [performance]);

  if (isLoading || !performance) return <CircularProgress />;

  return (
    <Box p={3}>
      <LearningProgressHeader />

      <KPISection data={performance.current_kpi} />

      <MonthlyTabs
        months={performance.months_status}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      />

      <MonthlyStats
        month={performance.months_status[selectedIndex]}
        targets={performance.target_data}
      />
    </Box>
  );
}