import { Box, Typography } from "@mui/material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { TrainingData } from "../api/providerScorecard.types";
import InsightCard from "./InsightCard";
import SectionContainer from "./SectionContainer";

interface Props {
  config: TrainingData;
}

export default function ProviderTrainingInsights({ config }: Props) {
  return (
    <SectionContainer title="Provider Training Insights" background="brand.paper">
      <Box
        sx={{
          display: "flex",
gap: 4,
flexWrap: "wrap",
        
        }}
      >
        {/* LEFT BOX - MY PROGRESS */}
        <Box
          sx={{
            backgroundColor: "#dbe7ef",
            borderRadius: 1,
            p: 4,
          }}
        >
          <Typography
            fontSize={12}
            fontWeight={600}
            color="text.secondary"
            mb={3}
          >
            MY PROGRESS
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            {config.tr_overall_training_shown && (
              <InsightCard
                title="My Learning Insights"
                description="Analyze user learning activities and engagement data."
                borderColor="#22c55e"
                backgroundColor="#eefaf3"
                icon={<TrendingUpOutlinedIcon fontSize="small" />}
              />
            )}

            {config.tr_learning_stats_shown && (
              <InsightCard
                title="My Learning Progress"
                description="Review and track your yearly performance for growth."
                borderColor="#a855f7"
                backgroundColor="#f3ecfc"
                icon={<InsightsOutlinedIcon fontSize="small" />}
              />
            )}
          </Box>
        </Box>

        {/* RIGHT BOX - MY ORGANIZATION */}
        <Box
          sx={{
            backgroundColor: "#dbe7ef",
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography
            fontSize={12}
            fontWeight={600}
            color="text.secondary"
            mb={3}
          >
            MY ORGANIZATION
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <InsightCard
              title="Clinic Performance"
              description="Track clinic-wide compliance and user performance."
              borderColor="#0ea5a3"
              backgroundColor="#e6f7f6"
              icon={<LocalHospitalOutlinedIcon fontSize="small" />}
            />

            <InsightCard
              title="Organization Performance"
              description="Monitor compliance across all clinics and users."
              borderColor="#ef4444"
              backgroundColor="#fdecec"
              icon={<AddCircleOutlineOutlinedIcon fontSize="small" />}
            />
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
}