import MultiSelectFilter from "../../../shared/components/MultiSelectFilter"
import { useBookmarkPrograms } from "../api/bookmark.hooks"
import type { BookmarkQueryParams } from "../api/bookmark.types"

interface ProgramDropdownProps {
  filters: BookmarkQueryParams
  setFilters: React.Dispatch<React.SetStateAction<BookmarkQueryParams>>
}

export default function ProgramDropdown({
  filters,
  setFilters
}: ProgramDropdownProps) {

  const { data } = useBookmarkPrograms()

  const selected = filters.programs ?? []

  const options =
    data?.results?.map((program) => ({
      value: program.program_id,
      label: program.title
    })) ?? []

  return (
    <MultiSelectFilter
      label="Program Name"
      options={options}
      value={selected}
      onChange={(value) =>
        setFilters((prev) => ({
          ...prev,
          programs: value,
          page: 1
        }))
      }
      width={180}
    />
  )
}