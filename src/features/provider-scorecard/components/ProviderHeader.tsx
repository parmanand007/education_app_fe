import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";

interface Props {
  startDate: string;
  endDate: string;
}

export default function ProviderHeader({ startDate, endDate }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "brand.light",
        borderRadius: 4,
        p: 5,
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        Provider Scorecard
      </Typography>

      <Typography color="text.secondary" mt={1}>
        Explore our Provider Scorecard and gather Insights
      </Typography>

      <Box
        sx={{
          mt: 3,
          backgroundColor: "background.paper",
          borderRadius: 3,
          px: 4,
          py: 2,
          display: "inline-flex",
          gap: 6,
        }}
      >
        <Box>
          <Typography fontSize={11} color="text.secondary">
            START DATE
          </Typography>
          <Typography fontWeight={600}>
            {dayjs(startDate).format("DD MMM, YYYY")}
          </Typography>
        </Box>

        <Box>
          <Typography fontSize={11} color="text.secondary">
            END DATE
          </Typography>
          <Typography fontWeight={600}>
            {dayjs(endDate).format("DD MMM, YYYY")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}