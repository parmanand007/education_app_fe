import { Card, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  data: any[];
}

export default function CMEChart({ data }: Props) {
  const theme = useTheme();

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          CME Tracking (2026)
        </Typography>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="program"
              stroke={theme.palette.brand.main}
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="contest"
              stroke={theme.palette.brand.dark}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}