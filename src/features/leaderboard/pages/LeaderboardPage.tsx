import { Box, CircularProgress } from "@mui/material";
import { useState, useMemo } from "react";

import { useTournaments } from "../../contests/api/contests.hooks";
import TournamentHero from "../../contests/components/TournamentHero";

import { useLeaderboard } from "../api/leaderboard.hooks";

import LeaderboardFilter from "../components/LeaderboardFilter";
import LeaderboardTable from "../components/LeaderboardTable";

export default function LeaderboardPage() {
  const [tournamentPage, setTournamentPage] = useState(1);

  const [assignmentType, setAssignmentType] =
    useState<"CLINIC" | "GROUP" | "ORG">("CLINIC");

  const { data: tournamentData } = useTournaments({
    status: "active",
    page: tournamentPage,
    page_size: 1,
  });

  const tournament = tournamentData?.results?.[0];

  const leaderboardParams = useMemo(() => {
    if (!tournament?.tournament_id) return undefined;

    return {
      tournament_id: tournament.tournament_id,
      assignment_type: assignmentType,
      page: 1,
      page_size: 10,
    };
  }, [tournament?.tournament_id, assignmentType]);

  const { data, isLoading } =
    useLeaderboard(leaderboardParams);

  return (
    <Box sx={{ px: 3, pb: 6 }}>
      {tournament && (
        <TournamentHero
          variant="leaderboard"
          name={tournament.name}
          startDate={tournament.start_date}
          endDate={tournament.end_date}
          currentIndex={tournamentPage}
          total={tournamentData?.count ?? 1}
          onPrev={() =>
            setTournamentPage((p) =>
              Math.max(p - 1, 1)
            )
          }
          onNext={() =>
            setTournamentPage((p) =>
              Math.min(
                p + 1,
                tournamentData?.count ?? 1
              )
            )
          }
          action={
            <LeaderboardFilter
              value={assignmentType}
              onChange={setAssignmentType}
            />
          }
        />
      )}

      <Box mt={3}>
        {isLoading ? (
          <Box display="flex" justifyContent="center" py={8}>
            <CircularProgress />
          </Box>
        ) : (
          <LeaderboardTable data={data?.results ?? []} />
        )}
      </Box>
    </Box>
  );
}