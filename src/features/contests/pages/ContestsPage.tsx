import { Box, Typography, CircularProgress } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import TournamentHero from "../components/TournamentHero";
import ContestModuleSummary from "../components/ContestModuleSummary";
import ContestFilters from "../components/ContestFilters";
import ContestGrid from "../components/ContestGrid";
import { useTournaments, useContests } from "../api/contests.hooks";

export default function ContestsPage() {
  /* Tournament Pagination */
  const [tournamentPage, setTournamentPage] = useState(1);

  /* Contest Filters */
  const [filters, setFilters] = useState({
    ordering: "-start_date",
    assignment_type: [] as string[],
    status: [] as number[],
    page: 1,
  });

  /* -------------------- TOURNAMENT QUERY -------------------- */

  const {
    data: tournamentData,
    isLoading: tournamentLoading,
  } = useTournaments({
    status: "active",
    page: tournamentPage,
    page_size: 1,
  });

  const tournament = tournamentData?.results?.[0];

  /* Reset contest page when tournament changes */
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      page: 1,
    }));
  }, [tournament?.tournament_id]);

  /* -------------------- CONTEST QUERY PARAMS -------------------- */

  const contestParams = useMemo(() => {
    if (!tournament?.tournament_id) return undefined;

    return {
      tournament_id: tournament.tournament_id,
      ordering: filters.ordering,
      assignment_type: filters.assignment_type,
      status: filters.status,
      page: filters.page,
      page_size: 10,
    };
  }, [
    tournament?.tournament_id,
    filters.ordering,
    filters.assignment_type,
    filters.status,
    filters.page,
  ]);

  const {
    data: contestData,
    isLoading: contestLoading,
  } = useContests(contestParams);

  /* -------------------- HANDLERS -------------------- */

  const handleFilterChange = (field: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
      page: 1,
    }));
  };

  /* -------------------- LOADING STATES -------------------- */

  if (tournamentLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={6}>
        <CircularProgress />
      </Box>
    );
  }

  if (!tournament) {
    return (
      <Typography mt={4}>
        No active tournament found.
      </Typography>
    );
  }

  const totalTournamentPages = Math.ceil(
    (tournamentData?.count ?? 1) / 1
  );

  /* -------------------- RENDER -------------------- */

  return (
    <Box sx={{ px: 3, pb: 6 }}>
      {/* Tournament Hero */}
      <TournamentHero
       variant="contest"
        name={tournament.name}
        startDate={tournament.start_date}
        endDate={tournament.end_date}
        currentIndex={tournamentPage}
        total={totalTournamentPages}
        onPrev={() =>
          setTournamentPage((p) => Math.max(p - 1, 1))
        }
        onNext={() =>
          setTournamentPage((p) =>
            Math.min(p + 1, totalTournamentPages)
          )
        }
      />
      

      {/* Wallet / Summary Section */}
      <ContestModuleSummary />

      {/* Contest Section */}
      <Box mt={5}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
          flexWrap="wrap"
          gap={2}
        >
          <Typography fontSize={22} fontWeight={600}>
            My Contests
          </Typography>

          <ContestFilters
            ordering={filters.ordering}
            assignmentType={filters.assignment_type}
            status={filters.status}
            onChange={handleFilterChange}
          />
        </Box>

        <ContestGrid
          contests={contestData?.results ?? []}
          loading={contestLoading}
        />
      </Box>
    </Box>
  );
}