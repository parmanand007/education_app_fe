import {
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
} from "@mui/material"

import { useBookmarkLearningPoints } from "../api/bookmark.hooks"

import type { BookmarkQueryParams } from "../api/bookmark.types"

interface LearningPointDropdownProps {
  filters: BookmarkQueryParams
  setFilters: React.Dispatch<React.SetStateAction<BookmarkQueryParams>>
}

export default function LearningPointDropdown({
  filters,
  setFilters,
}: LearningPointDropdownProps) {

  const { data } = useBookmarkLearningPoints()

  const handleChange = (event: SelectChangeEvent<string[]>) => {

    const value = event.target.value

    setFilters((prev) => ({
      ...prev,
      learning_point:
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
        value={filters.learning_point ?? []}
        onChange={handleChange}
        renderValue={(selected) =>
          selected.length === 0
            ? "All"
            : selected.length + " Selected"
        }
      >

        {data?.results?.map((lp: string) => (
          <MenuItem key={lp} value={lp}>
            <Checkbox
              checked={filters.learning_point?.includes(lp) ?? false}
            />
            <ListItemText primary={lp} />
          </MenuItem>
        ))}

      </Select>

    </FormControl>
  )
}