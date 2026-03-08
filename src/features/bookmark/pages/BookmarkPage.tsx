import { Box, Typography, Stack, Link } from "@mui/material"
import { useState } from "react"

import BookmarkFilters from "../components/BookmarkFilters"
import BookmarkCard from "../components/BookmarkCard"

import { useBookmarkedQuestions } from "../api/bookmark.hooks"

export default function QuestionBookmarkPage() {

  const [filters, setFilters] = useState({
    page: 1,
    page_size: 10,
    programs: [],
    learning_point: [],
    phases: [],
  })

  const { data } = useBookmarkedQuestions(filters)

  const results = data?.results ?? []


  return (
    <Box>

      <Typography variant="h5" mb={0.5}>
        Bookmarked Questions
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        mb={3}
      >
        Access and evaluate your bookmarked questions.
      </Typography>

      <BookmarkFilters
        filters={filters}
        setFilters={setFilters}
      />

      <Stack
        direction="row"
        spacing={1}
        mt={2}
        mb={2}
        alignItems="center"
      >
        <Typography variant="body2" color="primary.main">
          Showing {results.length} results
        </Typography>
      </Stack>

      <Stack spacing={2}>
        {results.map((item) => (
          <BookmarkCard
            key={item.question.question_id}
            data={item}
          />
        ))}
      </Stack>

    </Box>
  )
}