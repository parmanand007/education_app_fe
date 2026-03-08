
import { useLearningPoints } from "../api/questionReview.hooks"
import { Dispatch, SetStateAction } from "react"

import { QuestionReviewFilters } from "../api/questionReview.types"
import MultiSelectFilter from "../../../shared/components/MultiSelectFilter"

interface Props {
  filters: QuestionReviewFilters
  setFilters: Dispatch<SetStateAction<QuestionReviewFilters>>
}

export default function LearningPointDropdown({
  filters,
  setFilters
}: Props) {

  const { data } = useLearningPoints("")

  const options =
    data?.results?.map((lp: string) => ({
      value: lp,
      label: lp
    })) ?? []

  return (
    <MultiSelectFilter
      label="Learning Points"
      options={options}
      value={filters.learning_points ?? []}
      onChange={(value) =>
        setFilters((prev) => ({
          ...prev,
          learning_points: value,
          page: 1
        }))
      }
    />
  )
}