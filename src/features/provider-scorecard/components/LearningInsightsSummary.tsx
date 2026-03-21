import {
  Box,
  Typography,
  Select,
  MenuItem
} from "@mui/material";
import { useMemo } from "react";
import { useLearningInsights, useLearningPoints } from "../api/providerScorecard.hooks";
import { DateRangeType } from "../../../shared/utils/dateRange";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";


interface Props {
  dateRange: {
    start_date: string;
    end_date: string;
  };
  rangeType: DateRangeType;
  onRangeChange: (val: DateRangeType) => void;
}

export default function LearningInsightsSummary({
  dateRange,
  rangeType,
  onRangeChange
}: Props) {
  const { data } = useLearningInsights(dateRange);

  const { data: pointsData } = useLearningPoints({
    ...dateRange
  });

  
  const weakest = useMemo(() => {
      if (!pointsData?.results) return [];
      
      return [...pointsData.results]
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 8);
    }, [pointsData]);
    
if (!data) return null;

  const user = data?.user_average;
  const org = data?.org_average;
  
  return (
    <Box>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontWeight={600}>
          Your learning points of focus
        </Typography>

        <Select
  size="small"
  value={rangeType}
  onChange={(e) => onRangeChange(e.target.value as DateRangeType)}
  displayEmpty
  sx={{
    minWidth: 160,
    height: 36,

    borderRadius: "10px",
    border: "1px solid #38bdf8",
    backgroundColor: "#fff",

    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      gap: 1,
      padding: "6px 12px",
      fontSize: 13,
      fontWeight: 500,
      color: "#0f172a"
    },

    "& fieldset": {
      border: "none"
    },

    "&:hover": {
      borderColor: "#0ea5e9"
    }
  }}
  renderValue={(selected) => (
    <Box display="flex" alignItems="center" gap={1}>
      <CalendarTodayOutlinedIcon sx={{ fontSize: 16 }} />
      {
        selected === "THIS_MONTH"
          ? "This Month"
          : selected === "LAST_6_MONTHS"
          ? "Last 6 Months"
          : selected === "YEAR_TO_DATE"
          ? "Year to Date"
          : "Last Year"
      }
    </Box>
  )}
>
  <MenuItem value="THIS_MONTH">This Month</MenuItem>
  <MenuItem value="LAST_6_MONTHS">Last 6 Months</MenuItem>
  <MenuItem value="YEAR_TO_DATE">Year to Date</MenuItem>
  <MenuItem value="LAST_YEAR">Last Year</MenuItem>
</Select>
      </Box>

      {/* MAIN */}
      <Box display="flex" gap={2}>
        {/* LEFT CARD */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#eaf4fb",
            borderRadius: "20px",
            p: 3,
            border: "1px solid #38bdf8"
          }}
        >
          <Typography fontWeight={600} mb={2}>
            Your Performance Across All Learning Points
          </Typography>

          <Box display="flex" alignItems="center" gap={5}>
            {/* CIRCLE + LABEL */}
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  background: `conic-gradient(#16a34a ${user.accuracy}%, #e5e7eb 0%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1
                }}
              >
                <Box
                  sx={{
                    width: 82,
                    height: 82,
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Typography fontWeight={700} fontSize={20}>
                    {Math.round(user.accuracy)}%
                  </Typography>
                </Box>
              </Box>

              <Typography fontSize={12} color="text.secondary">
                Questions Accuracy
              </Typography>
            </Box>

            {/* STATS */}
            <Box display="flex" gap={5}>
              <Box>
                <Typography fontWeight={600}>
                  {user.total_questions_answered}
                </Typography>
                <Typography fontSize={12} color="text.secondary">
                  Total Qs Submitted
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={600}>
                  {user.total_correct_questions_answered}
                </Typography>
                <Typography fontSize={12} color="text.secondary">
                  Correct Answers
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={600}>
                  {Math.round(org.accuracy)}%
                </Typography>
                <Typography fontSize={12} color="text.secondary">
                  Org Average
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* RIGHT CARD */}
        <Box
          sx={{
            flex: 1.5,
            backgroundColor: "#f6ecd2",
            borderRadius: "20px",
            p: 3,
            border: "1px solid #facc15"
          }}
        >
          <Typography fontWeight={600} mb={2}>
            Learning Topics Needing More Practice
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              columnGap: 3,
              rowGap: 2
            }}
          >
            {weakest.map((item: any) => {
              const total = item.total_questions_answered;
              const correct = item.total_correct_questions_answered;

              return (
                <Box key={item.learning_point}>
                  <Typography fontSize={13} mb={0.5}>
                    {item.learning_point}
                  </Typography>

                  <Box
                    sx={{
                      height: 5,
                      borderRadius: 4,
                      backgroundColor: "#e5e7eb",
                      overflow: "hidden",
                      mb: 0.5
                    }}
                  >
                    <Box
                      sx={{
                        width: `${item.accuracy}%`,
                        height: "100%",
                        backgroundColor: "#16a34a"
                      }}
                    />
                  </Box>

                  <Typography fontSize={11} color="text.secondary">
                    {correct} / {total}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}