import { Box, Grid } from "@mui/material"
import { useParams } from "react-router-dom"

import PageHeader from "../../../shared/components/PageHeader"
import ProgramOverviewCard from "../components/ProgramOverviewCard"
import ProgramModulesCard from "../components/ProgramModulesCard"

import {
  useProgramDetail,
  useProgramChapters
} from "../api/programs.hooks"

export default function ProgramDetailPage() {

  const { programId } = useParams<{ programId: string }>()

  const { data: program } = useProgramDetail(programId)

  const { data: chapters } = useProgramChapters(programId)

  if (!program) return null

  const FALLBACK_IMAGE =
    "https://media.istockphoto.com/id/2153813386/photo/hospital-teamwork-and-doctors-with-folder-tablet-and-brainstorming-for-healthcare-and.jpg"

  return (

    <Box maxWidth={1400} mx="auto">

      {/* HERO HEADER */}
      <Box
        sx={{
          height: 180,
          borderRadius: 2,
          overflow: "hidden",
          mb: 3,
          position: "relative"
        }}
      >
        <Box
          component="img"
          src={program.image || FALLBACK_IMAGE}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.6)"
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 24,
            left: 24,
            color: "#fff"
          }}
        >
          <Box sx={{ fontSize: 14, mb: 0.5 }}>
            {program.categories?.[0]}
          </Box>

          <Box sx={{ fontSize: 22, fontWeight: 600 }}>
            {program.title}
          </Box>

          <Box sx={{ fontSize: 14 }}>
            {program.sub_title}
          </Box>
        </Box>
      </Box>


      {/* PAGE GRID */}
      <Grid container spacing={4}>

        <Grid size={{ xs: 12, md: 8 }}>
          <ProgramOverviewCard program={program} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ProgramModulesCard chapters={chapters?.results ?? []} />
        </Grid>

      </Grid>

    </Box>
  )
}