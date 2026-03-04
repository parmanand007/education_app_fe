import { Box, Chip, Typography } from "@mui/material"
import { QuestionReview } from "../api/questionReview.types"

interface Props {
  question: QuestionReview
}

export default function QuestionReviewCard({ question }: Props) {

  const correct =
    JSON.stringify(question.user_answer) === JSON.stringify(question.answer)

  return (
    <Box
      sx={{
        border: "1px solid #d9e7e3",
        borderRadius: 2,
        p: 3,
        mb: 2,
        background: correct ? "#eefaf6" : "#fff6f6"
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={600}>
          {question.title}
        </Typography>

        <Typography
          sx={{
            color: correct ? "green" : "red",
            fontWeight: 600
          }}
        >
          {correct ? "CORRECT" : "INCORRECT"}
        </Typography>
      </Box>

      <Box mt={1} display="flex" gap={1}>
        <Chip label="Program" size="small" color="warning" />
        <Chip label={question.category[0]} size="small" color="info" />
      </Box>

      <Typography mt={2} fontSize={14}>
        {question.question}
      </Typography>

      <Typography mt={2} fontSize={12} color="text.secondary">
        {new Date(question.submission_date).toLocaleString()}
      </Typography>
    </Box>
  )
}