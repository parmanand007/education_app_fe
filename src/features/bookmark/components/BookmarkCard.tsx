import {
  Box,
  Typography,
  Chip,
  Card,
  IconButton,
  Stack
} from "@mui/material"
import type { BookmarkItem } from "../api/bookmark.types"
import BookmarkIcon from "@mui/icons-material/Bookmark"


interface BookmarkCardProps {
  data: BookmarkItem
}

export default function BookmarkCard({ data }: BookmarkCardProps) {

  const question = data.question

  return (
    <Card
      sx={{
        p: 3,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >

      <Box
        display="flex"
        justifyContent="space-between"
      >

        <Box flex={1}>

          <Typography
            fontWeight={600}
            mb={1}
          >
            {data.title}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            mb={1.5}
          >

            <Chip
              label="Program"
              size="small"
              sx={{
                bgcolor: "#fff3cd",
                color: "#a16207",
                fontWeight: 500,
              }}
            />

            {question.learning_point.map((lp) => (
              <Chip
                key={lp}
                label={lp}
                size="small"
                sx={{
                  bgcolor: "brand.light",
                  color: "brand.dark",
                }}
              />
            ))}

          </Stack>

          <Typography
            variant="body2"
            color="text.primary"
            mb={1}
          >
            {question.question}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            {new Date(data.added_on).toLocaleString()}
          </Typography>

        </Box>

        <IconButton>
          <BookmarkIcon fontSize="small" />
        </IconButton>

      </Box>

    </Card>
  )
}