import { Box, Typography, CircularProgress } from "@mui/material"
import { useState } from "react"
import TournamentHero from "../components/TournamentHero"
import ContestGrid from "../components/ContestGrid"
import { useTournaments } from "../api/contests.hooks"
import ContestModuleSummary from "../components/ContestModuleSummary"

export default function ContestsPage() {
  const [page, setPage] = useState(1)

  const pageSize = 1

  const { data, isLoading, isError } = useTournaments({
    status: "active",
    page,
    page_size: pageSize,
  })

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={6}>
        <CircularProgress />
      </Box>
    )
  }

  if (isError || !data?.results?.length) {
    return (
      <Typography mt={4}>
        No active tournament found.
      </Typography>
    )
  }

  const tournament = data.results[0]
  const totalPages = Math.ceil(data.count / pageSize)

  return (
    <Box >
      <TournamentHero
        name={tournament.name}
        startDate={tournament.start_date}
        endDate={tournament.end_date}
        currentIndex={page}
        total={totalPages}
        onPrev={() => setPage((p) => Math.max(p - 1, 1))}
        onNext={() =>
          setPage((p) =>
            Math.min(p + 1, totalPages)
          )
        }
      />
      <ContestModuleSummary />

      <Box mt={4}>
        <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 3 }}>
          My Contests
        </Typography>

        {/* <ContestGrid tournamentId={tournament.tournament_id} /> */}
        <ContestGrid  />
      </Box>
    </Box>
  )
}