import { Card, CardContent, Typography, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";

interface Props {
  title: string;
  value: number;
}

export default function CMEClassificationCard({ title, value }: Props) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        background: theme.palette.brand.light,
        cursor: "pointer",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6">
            {value.toString().padStart(2, "0")}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary }}
          >
            {title}
          </Typography>
        </Box>

        <ChevronRightIcon sx={{ color: theme.palette.brand.dark }} />
      </CardContent>
    </Card>
  );
}