import { Box, Typography } from "@mui/material";

interface Props {
  item: any;
  onClick?: () => void;
}


export default function LearningPointCard({ item, onClick }: Props) {
  const correct = item.total_correct_questions_answered;
  const total = item.total_questions_answered;

  const correctPercent = total ? (correct / total) * 100 : 0;
  const incorrectPercent = 100 - correctPercent;

  return (
    <Box
    onClick={onClick} 
      sx={{
        p: 2,
        borderRadius: 0.5,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        transition: "0.2s",
        "&:hover": {
          boxShadow: 2
        }
      }}
    >
      <Typography fontWeight={600} mb={1}>
        {item.learning_point}
      </Typography>

      <Box display="flex" gap={2}>
        <Typography fontSize={12} color="#16a34a">
          {Math.round(correctPercent)}% Correct
        </Typography>

        <Typography fontSize={12} color="#dc2626">
          {Math.round(incorrectPercent)}% Incorrect
        </Typography>
      </Box>
    </Box>
  );
}