import { Stack } from "@mui/material"

import ProgramDropdown from "./ProgramDropdown"
import LearningPointDropdown from "./LearningPointDropdown"
import PhaseDropdown from "./PhaseDropdown"

interface Props {
  filters: any
  setFilters: (filters: any) => void
}

export default function BookmarkFilters({
  filters,
  setFilters,
}: Props) {

  return (
    <Stack
      direction="row"
      spacing={2}
      flexWrap="wrap"
    >
      <ProgramDropdown
        filters={filters}
        setFilters={setFilters}
      />

      <LearningPointDropdown
        filters={filters}
        setFilters={setFilters}
      />

      <PhaseDropdown
        filters={filters}
        setFilters={setFilters}
      />
    </Stack>
  )
}