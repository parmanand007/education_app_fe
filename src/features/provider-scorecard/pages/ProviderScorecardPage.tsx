import { Box } from "@mui/material";
import { useOrgGlobalConfiguration } from "../api/providerScorecard.hooks";
import ProviderHeader from "../components/ProviderHeader";
import ProviderTrainingInsights from "../components/ProviderTrainingInsights";
import ProviderClinicalInsights from "../components/ProviderClinicalInsights";

export default function ProviderScorecardPage() {
  const { data: config } = useOrgGlobalConfiguration();

  if (!config) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4}}>
      <ProviderHeader
        startDate={config.start_date}
        endDate={config.end_date}
      />

      {config.page_training_shown && (
        <ProviderTrainingInsights config={config.training_data} />
      )}

      {config.page_clinical_shown && (
        <ProviderClinicalInsights config={config.clinical_data} />
      )}
    </Box>
  );
}