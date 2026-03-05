import {
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
} from "@mui/material"

import { useBookmarkPrograms } from "../api/bookmark.hooks"
import type { BookmarkQueryParams, ProgramFilter } from "../api/bookmark.types"

interface ProgramDropdownProps {
  filters: BookmarkQueryParams
  setFilters: React.Dispatch<React.SetStateAction<BookmarkQueryParams>>
}

export default function ProgramDropdown({
  filters,
  setFilters,
}: ProgramDropdownProps) {

  const { data } = useBookmarkPrograms()
  const selected = filters.programs ?? []
  const handleChange = (event: SelectChangeEvent<string[]>) => {

    const value = event.target.value

    setFilters((prev) => ({
      ...prev,
      programs:
        typeof value === "string"
          ? value.split(",")
          : value,
      page: 1,
    }))
  }

  return (
    <FormControl
      sx={{
        minWidth: 220,
        "& .MuiOutlinedInput-root": {
          bgcolor: selected.length
            ? "brand.dark"
            : "background.paper",
          color: selected.length
            ? "#fff"
            : "text.primary",
        }
      }}
    >

      <Select
        multiple
        displayEmpty
        value={selected}
        onChange={handleChange}
        renderValue={(selected) =>
          selected.length
            ? `${selected.length} Selected`
            : "All"
        }
      >

        {data?.results?.map((program) => (
          <MenuItem
            key={program.program_id}
            value={program.program_id}
          >
            <Checkbox
              checked={selected.includes(program.program_id)}
            />
            <ListItemText primary={program.title} />
          </MenuItem>
        ))}

      </Select>

    </FormControl>
  )
}