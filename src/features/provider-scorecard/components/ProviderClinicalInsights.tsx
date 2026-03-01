import { Box } from "@mui/material";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

import { ClinicalData } from "../api/providerScorecard.types";
import InsightCard from "./InsightCard";
import SectionContainer from "./SectionContainer";

interface Props {
  config: ClinicalData;
}

export default function ProviderClinicalInsights({ config }: Props) {
  return (
    <SectionContainer title="Provider Clinical Insights" background="brand.light">
      <Box
        sx={{
          display: "flex",
gap: 4,
flexWrap: "wrap",
        }}
      >
        {config.cl_readdressed_card_shown && (
          <InsightCard
            title="Clinician Statistics"
            description="Analyze clinical metrics for patient care."
            borderColor="#f59e0b"
            backgroundColor="#fff6e8"
            icon={<BarChartOutlinedIcon fontSize="small" />}
          />
        )}

        {config.cl_suspect_card_shown && (
          <InsightCard
            title="Prevalence Insights"
            description="Understand and analyze disease trends."
            borderColor="#f97316"
            backgroundColor="#fff2e6"
            icon={<InsightsOutlinedIcon fontSize="small" />}
          />
        )}

        {config.cl_awv_card_shown && (
          <InsightCard
            title="Panel Breakdown"
            description="Analyze panel data for provider insights."
            borderColor="#ef4444"
            backgroundColor="#fdecec"
            icon={<PieChartOutlineOutlinedIcon fontSize="small" />}
          />
        )}
      </Box>
    </SectionContainer>
  );
}