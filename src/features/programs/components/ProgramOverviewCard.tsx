import {
  Box,
  Typography,
  Chip,
  Paper,
  Button
} from "@mui/material"

import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined"
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"

import type { ProgramDetail } from "../api/programs.types"


interface Props {
  program: ProgramDetail
}

export default function ProgramOverviewCard({ program }: Props) {

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
            gap: 4,
            flexWrap: "wrap",
            alignItems: "center"
          }}
        >

          {/* Mandatory */}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CheckBoxOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography fontSize={13}>
              {program.mandatory ? "Mandatory" : "Optional"}
            </Typography>
          </Box>


          {/* Modules */}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LayersOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography fontSize={13}>
              {program.modules_count} Modules
            </Typography>
          </Box>


          {/* Certificate */}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmojiEventsOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography fontSize={13}>
              Certificate
            </Typography>
          </Box>


          {/* Level */}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <BarChartOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography fontSize={13}>
              {program.complexity}
            </Typography>
          </Box>


          {/* CME */}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AccessTimeOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography fontSize={13}>
              {program.cme_earned ?? 0} CME Hours
            </Typography>
          </Box>

        </Box>

      </Box>



      {/* OVERVIEW */}

      <Typography sx={{ fontWeight: 600, mb: 1 }}>
        Overview
      </Typography>



      {/* ASSIGNED CARD */}

      {assignedDate && (

        <Paper
          sx={{
            p: 2,
            mb: 3,
            width: 220,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "#f3f6fb"
          }}
        >

          <Typography
            sx={{
              fontSize: 12,
              color: "text.secondary"
            }}
          >
            Assigned on
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600
            }}
          >
            {assignedDate}
          </Typography>

        </Paper>

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
        {program.description ?? ""}
      </Typography>



      {/* CME CARD */}

      <Paper
        sx={{
          background: "#efe6d5",
          p: 3,
          borderRadius: 2,
          maxWidth: 520
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
          mb={2}
        >
          CME Accreditation ensures high-quality, relevant healthcare education,
          supporting ongoing professional development for providers.
        </Typography>

        <Button
          variant="contained"
          size="small"
        >
          View Detail →
        </Button>

      </Paper>

    </Box>
  )
}