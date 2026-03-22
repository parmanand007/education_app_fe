import { Box, useTheme } from "@mui/material";

const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

export default function MonthlyTabs({
  months,
  selectedIndex,
  onChange
}: any) {
  const theme = useTheme();

  return (
    <Box mb={2}>
      <Box fontSize={14} fontWeight={600} mb={1}>
        User KPI Progress
      </Box>

      <Box display="flex" gap={1} flexWrap="wrap">
        {months.map((m: any, i: number) => {
          const isSelected = i === selectedIndex;

          let bg = "#fff";
          let color = "#dc2626";
          let border = "1px solid #f87171";

          switch (m.status) {
            case 0: // IN_PROGRESS
              bg = "#e0f2fe";
              color = "#0284c7";
              border = "none";
              break;

            case 1: // COMPLETED
              bg = "#dcfce7";
              color = "#16a34a";
              border = "none";
              break;

            case 2: // MISSED
              bg = "#fff";
              color = "#dc2626";
              border = "1px solid #f87171";
              break;

            case 3: // DISABLED
              bg = "#e5e7eb";
              color = "#9ca3af";
              border = "none";
              break;

            case 4: // NOT_PARTICIPATED
              bg = "#f1f5f9";
              color = "#64748b";
              border = "none";
              break;
          }

          // selected override
          if (isSelected) {
            bg = theme.palette.brand.main;
            color = "#fff";
            border = "none";
          }

          return (
            <Box
              key={i}
              onClick={() => m.status !== 3 && onChange(i)}
              sx={{
                px: 2,
                py: 0.6,
                borderRadius: 2,
                fontSize: 12,
                fontWeight: 600,
                cursor: m.status === 3 ? "not-allowed" : "pointer",
                background: bg,
                color,
                border,
              }}
            >
              {MONTHS[m.month_id - 1]}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}