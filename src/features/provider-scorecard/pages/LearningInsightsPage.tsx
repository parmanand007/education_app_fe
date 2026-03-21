import { Box } from "@mui/material";
import { useMemo, useState } from "react";

import LearningInsightsHeader from "../components/LearningInsightsHeader";
import LearningInsightsSummary from "../components/LearningInsightsSummary";
import LearningPointsSection from "../components/LearningPointsSection";

import { getDateRange, DateRangeType } from "../../../shared/utils/dateRange";

export default function LearningInsightsPage() {
  const [rangeType, setRangeType] = useState<DateRangeType>("YEAR_TO_DATE");

  const dateRange = useMemo(() => {
    return getDateRange(rangeType);
  }, [rangeType]);
    console.log("LearningInsightsPage mounted");

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <LearningInsightsHeader />

      <LearningInsightsSummary
        dateRange={dateRange}
        rangeType={rangeType}
        onRangeChange={setRangeType}
      />

      <LearningPointsSection dateRange={dateRange} />
    </Box>
  );
}