import { Box, Typography } from "@mui/material"

interface Props {
  question: string
  choices: string[]
  type: "SC" | "MC" | "BC"
  selected: string[]
  onChange: (value: string[]) => void
}

export default function ContestQuestionCard({
  question,
  choices,
  type,
  selected,
  onChange,
}: Props) {

  const handleSelect = (label: string) => {

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

      {/* Question */}

      <Typography
        fontSize={15}
        lineHeight={1.6}
        mb={3}
        color="primary.main"
      >
        {question}
      </Typography>

      {/* Choices */}

      <Box
        display="flex"
        flexDirection="column"
        gap={2}
      >

        {choices.map((choice, index) => {

          const label = String.fromCharCode(65 + index)

          const active = selected.includes(label)

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
                borderColor: active ? "primary.main" : "divider",
                borderRadius: 2,
                p: 2,
                cursor: "pointer",
                backgroundColor: active
                  ? "rgba(30,167,215,0.08)"
                  : "background.paper",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.02)",
                },
              }}
            >

              {/* Choice Letter */}

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
                  fontWeight: 600,
                }}
              >
                {label}
              </Box>

              <Typography fontSize={14}>
                {choice}
              </Typography>

            </Box>

          )

        })}

      </Box>

      {/* Report Question */}

      <Typography
        fontSize={13}
        mt={2}
        color="error.main"
        sx={{ cursor: "pointer" }}
      >
        ⚠ Report Question
      </Typography>

    </Box>

  )
}