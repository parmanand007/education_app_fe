import {
  Paper,
  Typography,
  Box,
  Chip
} from "@mui/material"

import type { ProgramDetail } from "../api/programs.types"

import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined"
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"


interface ProgramOverviewCardProps {
  program: ProgramDetail
}


export default function ProgramOverviewCard({
  program
}: ProgramOverviewCardProps) {

  const assignedDate = program.assigned_on
    ? new Date(program.assigned_on).toLocaleDateString()
    : null

  return (

    <Box>

      {/* WHAT'S INCLUDED */}

      <Box sx={{ mb: 3 }}>

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            mb: 1
          }}
        >
          What's Included
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap"
          }}
        >

          {/* Mandatory */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1
            }}
          >
            <CheckBoxOutlinedIcon
              sx={{ fontSize: 16, color: "text.secondary" }}
            />

            <Typography fontSize={13}>
              {program.mandatory ? "Mandatory" : "Optional"}
            </Typography>

          </Box>


          {/* Modules */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1
            }}
          >
            <LayersOutlinedIcon
              sx={{ fontSize: 16, color: "text.secondary" }}
            />

            <Typography fontSize={13}>
              {program.modules_count} Modules
            </Typography>

          </Box>


          {/* Complexity */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1
            }}
          >
            <BarChartOutlinedIcon
              sx={{ fontSize: 16, color: "text.secondary" }}
            />

            <Typography fontSize={13}>
              {program.complexity}
            </Typography>

          </Box>

        </Box>

      </Box>



      {/* OVERVIEW */}

      <Typography
        sx={{
          fontWeight: 600,
          mb: 1
        }}
      >
        Overview
      </Typography>



      {/* ASSIGNED DATE */}

      {assignedDate && (

        <Chip
          label={`Assigned on ${assignedDate}`}
          sx={{
            mb: 2
          }}
        />

      )}



      {/* DESCRIPTION */}

      <Typography
        sx={{
          fontWeight: 600,
          mb: 1
        }}
      >
        Description
      </Typography>


      <Typography
        color="text.secondary"
        mb={3}
      >
        {program.description ?? "No description available"}
      </Typography>



      {/* CME CARD */}

      <Paper
        sx={{
          p: 3,
          background: "#f5efe3"
        }}
      >

        <Typography
          fontWeight={600}
          mb={1}
        >
          Our CME Accreditation
        </Typography>

        <Typography
          fontSize={14}
          color="text.secondary"
        >
          CME Accreditation ensures high-quality, relevant healthcare education,
          supporting ongoing professional development for providers.
        </Typography>

      </Paper>

    </Box>

  )
}