import {
  Box,
  Typography,
  Chip,
  Stack,
  IconButton,
  useTheme
} from "@mui/material"

import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import LaunchIcon from "@mui/icons-material/OpenInNew"
import DownloadIcon from "@mui/icons-material/Download"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"

import { AchievementProgram } from "../api/achievements.types"

interface Props {
  program: AchievementProgram
}

export default function AchievementCard({ program }: Props) {

  const theme = useTheme()

  const completedDate = new Date(program.added_on).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric"
    }
  )

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 340,
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          height: 150,
          backgroundImage: `url(${program.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Category */}
        <Chip
          label={program.category?.[0]}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            background: theme.palette.brand.tag,
            color: "#fff",
            fontSize: 12,
            height: 26
          }}
        />

        {/* Score */}
        <Chip
          label={`Score ${program.score}%`}
          size="small"
          sx={{
            position: "absolute",
            bottom: 12,
            left: 12,
            background: "#2DBE7F",
            color: "#fff",
            fontWeight: 600,
            fontSize: 12,
            height: 26
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: 2.2 }}>

        {/* Title */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            mb: 0.8,
            color: theme.palette.text.primary
          }}
        >
          {program.program_name}
        </Typography>

        {/* Meta Row */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.2}
          sx={{
            fontSize: 13,
            color: theme.palette.text.secondary,
            mb: 1
          }}
        >
          <Typography>
            {program.mandatory ? "Mandatory" : "Elective"}
          </Typography>

          <Typography>•</Typography>

          <Stack direction="row" spacing={0.5} alignItems="center">
            <MenuBookIcon sx={{ fontSize: 16 }} />
            <Typography>{program.no_of_modules} Modules</Typography>
          </Stack>

          {program.certificate && (
            <>
              <Typography>•</Typography>

              <Stack direction="row" spacing={0.5} alignItems="center">
                <WorkspacePremiumIcon sx={{ fontSize: 16 }} />
                <Typography>Certificate</Typography>
              </Stack>
            </>
          )}
        </Stack>

        {/* Completed Row */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={0.8} alignItems="center">
            <CheckCircleIcon
              sx={{
                fontSize: 18,
                color: "#2DBE7F"
              }}
            />

            <Typography
              sx={{
                fontSize: 13,
                color: theme.palette.text.secondary
              }}
            >
              Completed on {completedDate}
            </Typography>
          </Stack>

          {/* Actions */}
          <Stack direction="row" spacing={0.8}>
            <IconButton
              size="small"
              sx={{
                background: "#F3F4F6",
                width: 32,
                height: 32
              }}
            >
              <LaunchIcon sx={{ fontSize: 18 }} />
            </IconButton>

            {program.certificate && (
              <IconButton
                size="small"
                component="a"
                href={program.certificate}
                target="_blank"
                sx={{
                  background: "#F3F4F6",
                  width: 32,
                  height: 32
                }}
              >
                <DownloadIcon sx={{ fontSize: 18 }} />
              </IconButton>
            )}
          </Stack>
        </Stack>

      </Box>
    </Box>
  )
}