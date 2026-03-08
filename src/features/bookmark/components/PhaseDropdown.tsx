

import MultiSelectFilter from "../../../shared/components/MultiSelectFilter"
import type { BookmarkQueryParams } from "../api/bookmark.types"

interface PhaseDropdownProps {
  filters: BookmarkQueryParams
  setFilters: React.Dispatch<React.SetStateAction<BookmarkQueryParams>>
}

const PHASES = [
  { label: "Training", value: "TM" },
  { label: "Self Assessment", value: "SM" },
  { label: "Certification", value: "CM" },
]

export default function PhaseDropdown({
  filters,
  setFilters,
}: PhaseDropdownProps) {

  const selected = filters.phases ?? []

  return (
    <MultiSelectFilter
      label="Phases"
      options={PHASES}
      value={selected}
      onChange={(value) =>
        setFilters((prev) => ({
          ...prev,
          phases: value,
          page: 1,
        }))
      }
    />
  )
}