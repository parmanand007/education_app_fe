import {
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
} from "@mui/material"

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

  const handleChange = (event: SelectChangeEvent<string[]>) => {

    const value = event.target.value

    setFilters((prev) => ({
      ...prev,
      phases:
        typeof value === "string"
          ? value.split(",")
          : value,
      page: 1,
    }))
  }

  return (
    <FormControl sx={{ minWidth: 240 }}>

      <Select
        multiple
        displayEmpty
        value={filters.phases ?? []}
        onChange={handleChange}
        renderValue={(selected) =>
          selected.length === 0
            ? "All"
            : selected.join(", ")
        }
      >

        {PHASES.map((phase) => (
          <MenuItem key={phase.value} value={phase.value}>
            <Checkbox
              checked={filters.phases?.includes(phase.value) ?? false}
            />
            <ListItemText primary={phase.label} />
          </MenuItem>
        ))}

      </Select>

    </FormControl>
  )
}