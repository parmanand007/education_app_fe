import { Box, Tabs, Tab, Typography, Drawer } from "@mui/material";
import { useMemo, useState } from "react";
import { useLearningPoints } from "../api/providerScorecard.hooks";
import LearningPointCard from "./LearningPointCard";
import LearningPointDetails from "./LearningPointDetails";

const TAB_MAP = {
  ALL: undefined,
  PROGRAMS: "PROGRAMS",
  CONTEST: "CONTEST",
  TAILORED: "TAILORED_CT"
} as const;

interface Props {
  dateRange: {
    start_date: string;
    end_date: string;
  };
}

export default function LearningPointsSection({ dateRange }: Props) {
  const [tab, setTab] = useState<keyof typeof TAB_MAP>("ALL");
  const [selected, setSelected] = useState<string | null>(null);

  const params = useMemo(
    () => ({
      start_date: dateRange.start_date,
      end_date: dateRange.end_date,
      earned_at: TAB_MAP[tab]
    }),
    [dateRange, tab]
  );

  const { data, isLoading } = useLearningPoints(params);

  return (
    <Box
      sx={{
        backgroundColor: "#f6ecd2", // match target yellow section
        borderRadius: .5,
        p: 3
      }}
    >
      {/* HEADER */}
      <Box display="flex" alignItems="center" mb={2}>
        <Typography fontWeight={600}>
          Learning Points Stats
        </Typography>
      </Box>

      {/* TABS */}
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        sx={{
          mb: 2,
          minHeight: 36,
          "& .MuiTabs-indicator": {
            height: 2,
            backgroundColor: "brand.main"
          }
        }}
      >
        {["ALL", "PROGRAMS", "CONTEST", "TAILORED"].map((t) => (
          <Tab
            key={t}
            value={t}
            disableRipple
            label={
              t === "ALL"
                ? "All"
                : t === "PROGRAMS"
                ? "Programs"
                : t === "CONTEST"
                ? "Contests"
                : "Tailored Education"
            }
            sx={{
              textTransform: "none",
              minHeight: 36,
              px: 2,
              fontSize: 13,
              fontWeight: 500,
              color: "text.secondary",
              "&.Mui-selected": {
                color: "brand.main",
                fontWeight: 600
              }
              
            }}
          />
        ))}
      </Tabs>

      {/* LOADING STATE */}
      {isLoading && (
        <Box py={4} textAlign="center">
          <Typography fontSize={13} color="text.secondary">
            Loading...
          </Typography>
        </Box>
      )}

      {/* EMPTY STATE */}
      {!isLoading && !data?.results?.length && (
        <Box py={6} textAlign="center">
          <Typography fontWeight={600}>
            No learning data available
          </Typography>
          <Typography fontSize={13} color="text.secondary">
            Start answering questions to see your insights here.
          </Typography>
        </Box>
      )}

      {/* GRID */}
      {!!data?.results?.length && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))",
            gap: 2
          }}
        >
          {data.results.map((item: any) => (
            <LearningPointCard
              key={item.learning_point}
              item={item}
              onClick={() => setSelected(item.learning_point)}
            />
          ))}
        </Box>
      )}
      <Drawer
        anchor="right"
        open={!!selected}
        onClose={() => setSelected(null)}
        PaperProps={{
          sx: {
            width: 420
          }
        }}
      >
        {selected && (
          <LearningPointDetails
            learningPoint={selected}
            dateRange={dateRange}
            onClose={() => setSelected(null)}
          />
        )}
      </Drawer>
    </Box>
  );
}