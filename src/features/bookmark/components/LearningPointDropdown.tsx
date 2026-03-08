
import MultiSelectFilter from "../../../shared/components/MultiSelectFilter"
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

  const selected = filters.learning_point ?? []

  const options =
    data?.results?.map((lp: string) => ({
      value: lp,
      label: lp,
    })) ?? []

  return (
    <MultiSelectFilter
      label="Learning Points"
      options={options}
      value={selected}
      onChange={(value) =>
        setFilters((prev) => ({
          ...prev,
          learning_point: value,
          page: 1,
        }))
      }
    />
  )
}