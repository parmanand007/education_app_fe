import { Box, Typography, CircularProgress } from "@mui/material"
import { useState } from "react"

import { useQuestionReviews } from "../api/questionReview.hooks"
import QuestionReviewCard from "../components/QuestionReviewCard"
import { QuestionReviewFilters as QuestionReviewFiltersType } from "../api/questionReview.types"
import QuestionReviewFiltersSection from "../components/QuestionReviewFilters"

export default function QuestionReviewPage() {

  const [filters, setFilters] = useState<QuestionReviewFiltersType>({
    page: 1,
    page_size: 10,
    learning_points: [],
    programs: [],
    start_date: "",
    end_date: ""
  })

  const { data, isLoading } = useQuestionReviews(filters)

  return (
    <Box maxWidth={1200}>

      <Typography variant="h5" fontWeight={600}>
        Review Answers
      </Typography>

      <Typography color="text.secondary" fontSize={14}>
        Access and evaluate your submissions across Doctustech.
      </Typography>

      <QuestionReviewFiltersSection
        filters={filters}
        setFilters={setFilters}
      />

      <Box mt={4}>

        {isLoading && <CircularProgress />}

        {data?.results.map((question) => (
          <QuestionReviewCard
            key={question.question_id}
            question={question}
          />
        ))}

      </Box>

    </Box>
  )
}