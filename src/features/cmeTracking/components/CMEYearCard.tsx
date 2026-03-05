import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props {
  label: string;
  hours: number;
}

export default function CMEYearCard({ label, hours }: Props) {
  const theme = useTheme();

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography
          variant="caption"
          sx={{ color: theme.palette.text.secondary }}
        >
          {label}
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Total CME Hours Earned
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: theme.palette.brand.main,
            mb: 2,
          }}
        >
          {hours}
        </Typography>

        {label === "CURRENT YEAR" && (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="contained">Request Certification</Button>

            <Button
              variant="text"
              sx={{ color: theme.palette.brand.dark }}
            >
              Share Certificate
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}