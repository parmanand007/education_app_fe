import {
  Box,
  Typography,
  LinearProgress,
  Chip,
} from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import type { Program } from "../api/programs.types";

interface Props {
  program: Program;
}

export default function ProgramCard({ program }: Props) {
  const isInProgress = program.status === 0;

  const FALLBACK_IMAGE =
    "https://media.istockphoto.com/id/2153813386/photo/hospital-teamwork-and-doctors-with-folder-tablet-and-brainstorming-for-healthcare-and.jpg?s=612x612&w=0&k=20&c=yujrA_9IMw2t9t33VmqcWi3l-TYv0cvcAg6l6DGQoQg=";

  return (
    <Box sx={{ width: "100%" }}>
      {/* IMAGE */}
      <Box
        sx={{
          height: 165,
          borderRadius: 1,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={program.image || FALLBACK_IMAGE}
          alt={program.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {program.categories?.[0] && (
          <Chip
            label={program.categories[0]}
            size="small"
            sx={(theme) => ({
              position: "absolute",
              top: 12,
              left: 12,
              backgroundColor: theme.palette.brand.tag,
              color: "#fff",
              fontSize: 11,
              height: 24,
              px: 1,
            })}
            
          />
        )}
      </Box>

      {/* TITLE */}
      <Typography
        sx={{
          mt: 1.5,
          fontWeight: 600,
          fontSize: 15,
        }}
      >
        {program.title}
      </Typography>

      {/* META ROW WITH ICONS */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: 0.75,
          flexWrap: "wrap",
        }}
      >
        {/* Mandatory / Optional */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <CheckBoxOutlinedIcon
            sx={{ fontSize: 14, color: (theme) => theme.palette.text.secondary }}
          />
          <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
            {program.mandatory ? "Mandatory" : "Optional"}
          </Typography>
        </Box>

        {/* Modules */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <LayersOutlinedIcon
            sx={{ fontSize: 14, color: (theme) => theme.palette.text.secondary }}
          />
          <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
            {program.modules_count} Modules
          </Typography>
        </Box>

        {/* Complexity */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <BarChartOutlinedIcon
            sx={{ fontSize: 14, color: (theme) => theme.palette.text.secondary }}
          />
          <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
            {program.complexity?.toUpperCase()}
          </Typography>
        </Box>
      </Box>

      {/* START PROGRAM */}
      {!isInProgress && (
        <Typography
          sx={(theme) => ({
            fontSize: 13,
            mt: 1,
            fontWeight: 500,
            color: theme.palette.primary.main,
            cursor: "pointer",
          })}
        >
          Start Program
        </Typography>
      )}

      {/* PROGRESS */}
      {isInProgress && (
        <Box sx={{ mt: 1.5 }}>
          <Typography
            sx={{
              fontSize: 12,
              color: "text.secondary",
              mb: 0.5,
            }}
          >
            Program is in progress{" "}
            {program.modules_completed}/{program.modules_count} Modules
          </Typography>

          <LinearProgress
            variant="determinate"
            value={program.completion_percentage}
            sx={{
              height: 4,
              borderRadius: 2,
              backgroundColor: "#e5e7eb",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#f59e0b",
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
}
