import {
  Box,
  Typography,
  CircularProgress,
  Select,
  MenuItem
} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useState } from "react"

import { useQuestionReviews } from "../api/questionReview.hooks"
import QuestionReviewCard from "../components/QuestionReviewCard"
import {
  QuestionReviewFilters as QuestionReviewFiltersType,
  QuestionStatusSort
} from "../api/questionReview.types"
import QuestionReviewFiltersSection from "../components/QuestionReviewFilters"

export default function QuestionReviewPage() {

  const [filters, setFilters] = useState<QuestionReviewFiltersType>({
    page: 1,
    page_size: 10,
    learning_points: [],
    programs: [],
    start_date: "",
    end_date: "",
    question_status_sort: "all"
  })

  const { data, isLoading } = useQuestionReviews(filters)

  const handleSortChange = (value: QuestionStatusSort) => {
    setFilters((prev) => ({
      ...prev,
      page: 1,
      question_status_sort: value
    }))
  }

  return (
    <Box maxWidth={1200}>

      {/* Page Header */}
      <Typography variant="h5" fontWeight={600}>
        Review Answers
      </Typography>

      <Typography color="text.secondary" fontSize={14}>
        Access and evaluate your submissions across Doctustech.
      </Typography>

      {/* Filters */}
      <QuestionReviewFiltersSection
        filters={filters}
        setFilters={setFilters}
      />

      {/* Sort + Results Bar */}
<Box
  mt={2}
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2
  }}
>

  {/* Sort */}
  <Box display="flex" alignItems="center">

    <Typography fontSize={14} sx={{ mr: 0.5 }}>
      Sort By:
    </Typography>

    <Select
      value={filters.question_status_sort ?? "all"}
      onChange={(e) =>
        handleSortChange(e.target.value as QuestionStatusSort)
      }
      variant="standard"
      disableUnderline
      IconComponent={KeyboardArrowDownIcon}
      sx={{
        fontSize: 14,
        fontWeight: 600,
        color: "brand.main",
        minWidth: 60,

        "& .MuiSelect-select": {
          paddingRight: "18px",
          paddingLeft: 0
        },

        "& .MuiSvgIcon-root": {
          color: "brand.main",
          fontSize: 18
        }
      }}
    >
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="correct">Correct Answer</MenuItem>
      <MenuItem value="incorrect">Incorrect Answer</MenuItem>
    </Select>

  </Box>

  {/* Results Count */}
  <Typography fontSize={14}>
    Showing{" "}
    <Box
      component="span"
      sx={{
        color: "brand.main",
        fontWeight: 600
      }}
    >
      {data?.count ?? 0}
    </Box>{" "}
    results
  </Typography>

</Box>
      {/* Question List */}
      <Box mt={4}>

        {isLoading && <CircularProgress />}

        {data?.results?.map((question) => (
          <QuestionReviewCard
            key={question.question_id}
            question={question}
          />
        ))}

      </Box>

    </Box>
  )
}