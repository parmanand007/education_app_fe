import { Card, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CMEAccreditationCard() {
  const theme = useTheme();

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Accreditation
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary }}
        >
          Accredited by recognized medical authorities to ensure quality
          learning and professional development.
        </Typography>
      </CardContent>
    </Card>
  );
}