import { Box, Typography, useTheme } from "@mui/material";

export default function KPISection({ data }: any) {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" gap={4} mb={3}>
      <Box display="flex" alignItems="center" gap={3}>
        <Box
          sx={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            border: "6px solid #e5e7eb",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography fontWeight={700}>
            {data.annual_achieved}%
          </Typography>
          <Typography fontSize={11} color="text.secondary">
            Achieved
          </Typography>
        </Box>

        <Box>
          <Typography fontSize={11} color="text.secondary">
            Org Average
          </Typography>
          <Typography fontWeight={600}>
            {data.org_average}%
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          border: `1px solid ${theme.palette.brand.main}`,
          borderRadius: 0.5,
          p: 2,
          background: theme.palette.brand.light,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography fontWeight={600}>
            Monthly Target Attainment
          </Typography>
          <Typography fontSize={12} color="text.secondary">
            {data.total_months - data.total_achieved_months} more months to meet your annual goal
          </Typography>
        </Box>

        <Typography fontWeight={600}>
          {data.total_achieved_months} / {data.total_months}
        </Typography>
      </Box>
    </Box>
  );
}