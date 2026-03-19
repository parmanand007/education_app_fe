import { Box, Grid, Typography, CircularProgress } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { useMemo } from "react"

import ProgramOverviewCard from "../components/ProgramOverviewCard"
import ProgramModulesCard from "../components/ProgramModulesCard"

import {
  useProgramDetail,
  useProgramChapters,
  useProgramResult
} from "../api/programs.hooks"
import ProgramResultSection from "../components/ProgramResultSection"
import ProgramRatingCard from "../components/ProgramRatingCard"

export default function ProgramDetailPage() {

  const { programId } = useParams<{ programId: string }>()
  const navigate = useNavigate()

  const { data: program } = useProgramDetail(programId)
  const { data: chapters } = useProgramChapters(programId)

  const { data: result, isLoading: resultLoading } =
    useProgramResult(programId)

  /* Chapter-based completion (safe) */
  const isCompleted = useMemo(() => {

    if (!chapters?.results?.length) return false

    return chapters.results.every(
      (c) => c.is_completed === true
    )

  }, [chapters])

  if (!program) return null

  const FALLBACK_IMAGE =
    "https://media.istockphoto.com/id/2153813386/photo/hospital-teamwork-and-doctors-with-folder-tablet-and-brainstorming-for-healthcare-and.jpg?s=612x612&w=0&k=20&c=yujrA_9IMw2t9t33VmqcWi3l-TYv0cvcAg6l6DGQoQg="

  return (

    <Box maxWidth={1400} mx="auto">

      {/* HERO HEADER */}
      <Box
        sx={{
          height: 220,
          borderRadius: 2,
          overflow: "hidden",
          mb: 3,
          position: "relative"
        }}
      >

        {/* Background Image */}
        <Box
          component="img"
          src={program.image || FALLBACK_IMAGE}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.45) 40%, rgba(15,23,42,0.2) 100%)"
          }}
        />

        {/* BACK BUTTON */}
        <Typography
          onClick={() => navigate("/programs")}
          sx={{
            position: "absolute",
            top: 16,
            left: 24,
            fontSize: 14,
            color: "#fff",
            cursor: "pointer",
            opacity: 0.9,
            zIndex: 2,
            "&:hover": { opacity: 1 }
          }}
        >
          ← Back
        </Typography>

        {/* HERO CONTENT */}
        <Box
          sx={{
            position: "absolute",
            bottom: 24,
            left: 24,
            color: "#fff",
            maxWidth: 600
          }}
        >

          {program.categories?.[0] && (
            <Box
              sx={{
                display: "inline-block",
                mb: 1,
                px: 1.5,
                py: 0.4,
                borderRadius: 10,
                fontSize: 12,
                backgroundColor: "brand.tag"
              }}
            >
              {program.categories[0]}
            </Box>
          )}

          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 600
            }}
          >
            {program.title}
          </Typography>

          {program.sub_title && (
            <Typography
              sx={{
                fontSize: 14,
                opacity: 0.9
              }}
            >
              {program.sub_title}
            </Typography>
          )}

        </Box>

      </Box>

      

      {/* PAGE GRID (UNCHANGED) */}
      <Grid container spacing={4}>

  {/* LEFT SIDE */}
  <Grid size={{ xs: 12, md: 8 }}>

    {/* RESULT FIRST */}
    {isCompleted && (
      <Box mb={4}>
        {resultLoading ? (
          <CircularProgress />
        ) : (
          <ProgramResultSection result={result!} />
        )}
      </Box>
      
    )}

    {/* EXISTING CONTENT */}
    <ProgramOverviewCard program={program} />

  </Grid>



  {/* RIGHT SIDE (UNCHANGED) */}
  <Grid size={{ xs: 12, md: 4 }}>
    <ProgramModulesCard
      chapters={chapters?.results ?? []}
      programId={programId!}
    />
  </Grid>

</Grid>

    </Box>
  )
}