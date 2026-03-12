import {
  Box,
  Typography,
  Button,
  LinearProgress,
  CircularProgress,
  Paper,
  Divider
} from "@mui/material"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useContestQuestions, useSubmitContestAnswers } from "../api/contests.hooks"
import ContestQuestionCard from "../components/ContestQuestionCard"

export default function ContestQuestionsPage() {

  const { questionnaireId } = useParams()

  const { data, isLoading } = useContestQuestions(questionnaireId!)

  const submitMutation = useSubmitContestAnswers()

  const [index, setIndex] = useState(0)

  const [answers, setAnswers] = useState<Record<string, string[]>>({})

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={6}>
        <CircularProgress />
      </Box>
    )
  }

  const questions = data?.questions_data ?? []

  const current = questions[index]

  const progress = ((index + 1) / questions.length) * 100

  const handleAnswer = (value: string[]) => {

    setAnswers((prev) => ({
      ...prev,
      [current.question_id]: value,
    }))

  }

  const submitCurrent = () => {

    const payload = {
      questionnaire_id: questionnaireId!,
      user_answers: {
        [current.question_id]: {
          answer: answers[current.question_id],
          tta: "20",
        },
      },
    }

    submitMutation.mutate(payload)

  }

  return (

    <Box>

      <Paper sx={{ p: 2 }}>

        {/* Header */}

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={3}
        >

          <Box>

            <Typography fontSize={20} fontWeight={600} color="primary.main">
              Contest Questions
            </Typography>

            <Typography fontSize={14} color="text.secondary">
              Please answer the following questions. Click next to continue
            </Typography>

          </Box>

          <Button
  variant="outlined"
  size="small"
  sx={{
    color: "rgba(0,0,0,0.26)",
    borderColor: "rgba(0,0,0,0.12)",
    backgroundColor: "transparent",
    borderRadius: 1
  }}
>
  Save & Exit
</Button>

        </Box>
            <Divider sx={{ my: 1 }} />


        {/* Progress Row */}

        <Box
          display="flex"
          alignItems="center"
          gap={2}
          mb={4}
        >

          <Typography fontSize={14} fontWeight={600}>
            Questions {index + 1}/{questions.length}
          </Typography>

          <Box sx={{ width: "60%" }}>
            <LinearProgress
              variant="determinate"
              value={progress}
            />
          </Box>

          <Typography
            fontSize={14}
            fontWeight={600}
            color="text.secondary"
          >
            {Math.round(progress)}%
          </Typography>

        </Box>

        {/* Question */}

        <ContestQuestionCard
          question={current.question}
          choices={current.choices}
          type={current.type}
          selected={answers[current.question_id] ?? []}
          onChange={handleAnswer}
        />

        {/* Footer */}

        <Box
          mt={5}
          display="flex"
          justifyContent="flex-end"
          gap={2}
        >

          <Button
            variant="outlined"
            disabled={index === 0}
            onClick={() => setIndex((i) => i - 1)}
          >
            Previous
          </Button>

          {index < questions.length - 1 ? (

            <Button
              variant="contained"
              onClick={() => {
                submitCurrent()
                setIndex((i) => i + 1)
              }}
              disabled={!answers[current.question_id]}
            >
              Next
            </Button>

          ) : (

            <Button
              variant="contained"
              disabled={!answers[current.question_id]}
              onClick={submitCurrent}
            >
              Submit
            </Button>

          )}

        </Box>

      </Paper>

    </Box>

  )
}