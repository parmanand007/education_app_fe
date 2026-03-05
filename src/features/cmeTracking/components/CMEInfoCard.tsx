import { Card, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CMEInfoCard() {
  const theme = useTheme();

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          How to Earn CME Credits
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary }}
        >
          Participate in educational programs and tournaments on the
          platform to earn CME credits. Credits are automatically tracked
          and recorded in your CME dashboard.
        </Typography>
      </CardContent>
    </Card>
  );
}