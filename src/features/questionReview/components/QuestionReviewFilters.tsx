import { Box } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

import { QuestionReviewFilters } from "../api/questionReview.types"

import ProgramFilterDropdown from "./ProgramFilterDropdown"
import LearningPointDropdown from "./LearningPointDropdown"
import DateDropdown from "./DateDropdown"

interface Props {
  filters: QuestionReviewFilters
  setFilters: Dispatch<SetStateAction<QuestionReviewFilters>>
}

export default function QuestionReviewFiltersSection({
  filters,
  setFilters
}: Props) {

  return (
    <Box display="flex" gap={2} mt={3}>

  <ProgramFilterDropdown
    filters={filters}
    setFilters={setFilters}
  />

  <LearningPointDropdown
    filters={filters}
    setFilters={setFilters}
  />

  <DateDropdown
    filters={filters}
    setFilters={setFilters}
  />

</Box>
  )
}