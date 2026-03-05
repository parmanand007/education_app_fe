import { Box, CircularProgress } from "@mui/material"

import {
  useWalletLevel,
  useMilestones,
  useWeeklyPoints,
  useBadges
} from "../api/dtPoints.hooks"

import DTPointsHero from "../components/DTPointsHero"
import EarnPointsCard from "../components/EarnPointsCard"
import TournamentCard from "../components/TournamentCard"
import BadgesCard from "../components/BadgesCard"

export default function DTPointsPage() {

  const wallet = useWalletLevel()
  const milestones = useMilestones()
  const weekly = useWeeklyPoints()
  const badges = useBadges()

  const isLoading =
    wallet.isLoading ||
    milestones.isLoading ||
    weekly.isLoading ||
    badges.isLoading

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <CircularProgress />
      </Box>
    )
  }

  const generalMilestones =
    milestones.data.results.filter(
      (m: any) => m.type === "GENERAL"
    )

  return (
    <Box>

      {/* Hero Section */}
      <DTPointsHero
        wallet={wallet.data}
      />

      {/* Main Layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr 1.4fr",
          gap: 3,
          mt: 3
        }}
      >

        {/* Earn Points */}
        <EarnPointsCard
          wallet={wallet.data}
          milestones={generalMilestones}
        />

        {/* Tournament */}
        <TournamentCard
          weekly={weekly.data}
        />

        {/* Badges */}
        <BadgesCard
          wallet={wallet.data}
          badges={badges.data.data.TOMB.data}
        />

      </Box>

    </Box>
  )
}