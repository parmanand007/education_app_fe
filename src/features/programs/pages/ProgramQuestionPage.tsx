import { useState, useEffect } from "react"

import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  LinearProgress,
  Divider,
  CircularProgress
} from "@mui/material"


import {
  useProgramChapters,
  useChapterQuestions,
  useSubmitProgramAnswer
} from "../api/programs.hooks"

import type { ProgramQuestion } from "../api/programs.types"

import ProgramModulesCard from "../components/ProgramModulesCard"
import ProgramQuestionCard from "../components/ProgramQuestionCard"
import { useParams } from "react-router-dom"

export default function ProgramQuestionPage() {
  
  const { programId, chapterId } = useParams<{
    programId: string
    chapterId: string
  }>()
  
  const { data: chapters } =
    useProgramChapters(programId)

  const { data } =
    useChapterQuestions(chapterId)

  const submitMutation =
    useSubmitProgramAnswer()

  const questions: ProgramQuestion[] =
    data?.questions_data ?? []

  const [current, setCurrent] =
    useState<number>(0)

  const [answers, setAnswers] =
    useState<Record<string, string[]>>({})

  useEffect(() => {

    if (!questions.length) return

    const initialAnswers: Record<string, string[]> = {}

    questions.forEach((q) => {
      if (q.user_submitted_answer) {
        initialAnswers[q.question_id] =
          q.user_submitted_answer
      }
    })

    setAnswers(initialAnswers)

    const firstUnanswered =
      questions.findIndex(
        (q) => q.user_submitted_answer === null
      )

    if (firstUnanswered !== -1) {
      setCurrent(firstUnanswered)
    }

  }, [questions])

  if (!data || questions.length === 0) return null

  const module =
    questions[0].module_details

  const video =
    module.media?.[0]?.media ?? null

  const question =
    questions[current]

  const chapter =
    chapters?.results.find(
      (c) => c.chapter_id === chapterId
    )

  const progress =
    chapter?.progress ?? 0

  const isCompleted =
    chapter?.is_completed ?? false

  const selected =
    answers[question.question_id] ?? []

  const isAnswered =
    question.user_submitted_answer !== null

  const isLastQuestion =
    current === questions.length - 1

  const handleSelect = (value: string[]) => {

    setAnswers((prev) => ({
      ...prev,
      [question.question_id]: value
    }))

  }

  const handleAction = async () => {

    /* prevent submission if chapter completed */

    if (!isAnswered && !isCompleted) {

      if (!selected.length) return

      await submitMutation.mutateAsync({
        chapterId: chapterId!,
        questionId: question.question_id,
        answer: selected,
        tta: 0
      })

    }

    if (!isLastQuestion) {
      setCurrent((prev) => prev + 1)
    }

  }

  const handlePrevious = () => {

    if (current > 0) {
      setCurrent((prev) => prev - 1)
    }

  }

  const buttonLabel =
    !isAnswered && !isCompleted
      ? "Submit"
      : isLastQuestion
      ? "Finish"
      : "Next"

  const buttonDisabled =
    submitMutation.isPending ||
    (!isAnswered && !selected.length && !isCompleted)

  return (

    <Box maxWidth={1400} mx="auto">

      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 4 }}>

          <Typography mb={2}>
            ← Back to program
          </Typography>

          <ProgramModulesCard
            chapters={chapters?.results ?? []}
            programId={programId!}
          />

        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>

          {video && (

            <video
              src={video}
              controls
              width="100%"
              style={{ borderRadius: 12 }}
            />

          )}

          <Box
            mt={3}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >

            <Box>

              <Typography
                fontSize={22}
                fontWeight={600}
              >
                {module.module_name}
              </Typography>

              <Typography color="text.secondary">
                Please watch the video and answer the following questions.
              </Typography>

            </Box>

            <Button variant="outlined">
              Save & Exit
            </Button>

          </Box>

          <Divider sx={{ my: 3 }} />

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            mb={3}
          >

            <Typography fontWeight={600}>
              Questions
            </Typography>

            <Typography fontWeight={600}>
              {current + 1}/{questions.length}
            </Typography>

            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                flex: 1,
                height: 6,
                borderRadius: 6
              }}
            />

            <Typography fontWeight={600}>
              {progress}%
            </Typography>

          </Stack>

          <ProgramQuestionCard
            question={question.question}
            choices={question.choices}
            type={question.type}
            selected={selected}
            onChange={handleSelect}
            submitted={isAnswered}
            correctAnswer={question.correct_answer ?? []}
          />

          <Stack
            direction="row"
            justifyContent="space-between"
            mt={4}
          >

            <Button
              variant="outlined"
              onClick={handlePrevious}
              disabled={current === 0}
            >
              Previous
            </Button>

            <Button
              variant="contained"
              onClick={handleAction}
              disabled={buttonDisabled}
            >

              {submitMutation.isPending
                ? <CircularProgress size={20}/>
                : buttonLabel}

            </Button>

          </Stack>

        </Grid>

      </Grid>

    </Box>

  )

}