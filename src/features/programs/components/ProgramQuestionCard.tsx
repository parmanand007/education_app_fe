import { Box, Typography } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"

interface Props {
  question: string
  choices: string[]
  type: "SC" | "MC" | "BC"

  selected: string[]
  onChange: (value: string[]) => void

  submitted?: boolean
  correctAnswer?: string[]
}

export default function ProgramQuestionCard({
  question,
  choices,
  type,
  selected,
  onChange,
  submitted = false,
  correctAnswer = []
}: Props) {

  const handleSelect = (label: string) => {

    if (submitted) return

    if (type === "MC") {

      if (selected.includes(label)) {
        onChange(selected.filter((v) => v !== label))
      } else {
        onChange([...selected, label])
      }

    } else {

      onChange([label])

    }

  }

  return (

    <Box>

      <Typography
        fontSize={15}
        lineHeight={1.6}
        mb={3}
        color="primary.main"
      >
        {question}
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>

        {choices.map((choice, index) => {

          const label = String.fromCharCode(65 + index)

          const active = selected.includes(label)

          const isCorrect =
            submitted && correctAnswer.includes(label)

          const isWrong =
            submitted && active && !correctAnswer.includes(label)

          return (

            <Box
              key={label}
              onClick={() => handleSelect(label)}
              sx={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                gap: 2,
                border: "1px solid",
                borderRadius: 2,
                p: 2,
                cursor: submitted ? "default" : "pointer",

                borderColor:
                  isCorrect
                    ? "success.main"
                    : isWrong
                    ? "error.main"
                    : active
                    ? "primary.main"
                    : "divider",

                backgroundColor:
                  isCorrect
                    ? "rgba(16,185,129,0.08)"
                    : isWrong
                    ? "rgba(239,68,68,0.08)"
                    : active
                    ? "rgba(30,167,215,0.08)"
                    : "background.paper"
              }}
            >

              {submitted && isCorrect && (
                <CheckCircleIcon color="success"/>
              )}

              {submitted && isWrong && (
                <CancelIcon color="error"/>
              )}

              {!submitted && (

                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    border: "1px solid",
                    borderColor: "divider",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 600
                  }}
                >
                  {label}
                </Box>

              )}

              <Typography fontSize={14}>
                {choice}
              </Typography>

            </Box>

          )

        })}

      </Box>

    </Box>
  )
}