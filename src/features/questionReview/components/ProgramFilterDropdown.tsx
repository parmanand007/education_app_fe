
import { Dispatch, SetStateAction } from "react"
import { usePrograms } from "../api/questionReview.hooks"

import { QuestionReviewFilters } from "../api/questionReview.types"
import MultiSelectFilter from "../../../shared/components/MultiSelectFilter"

interface Props {
  filters: QuestionReviewFilters
  setFilters: Dispatch<SetStateAction<QuestionReviewFilters>>
}

export default function ProgramFilterDropdown({
  filters,
  setFilters
}: Props) {

  const { data } = usePrograms("")

  const options =
    data?.results?.map((program) => ({
      value: program.program_id,
      label: program.title
    })) ?? []

  return (
    <MultiSelectFilter
      label="Program Name"
      options={options}
      value={filters.programs ?? []}
      onChange={(value) =>
        setFilters((prev) => ({
          ...prev,
          programs: value,
          page: 1
        }))
      }
    />
  )
}