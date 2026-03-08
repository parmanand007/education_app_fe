import { Card, CardContent, Typography, Box } from "@mui/material"
import SettingsIcon from "@mui/icons-material/Settings"
import CalculateIcon from "@mui/icons-material/Calculate"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"

export default function CMEInfoCard() {
  const items = [
    {
      icon: <SettingsIcon fontSize="small" />,
      text: "CME hours are earned by completing Tournament questions. One hour of CME is earned for every 15 questions completed in Tournaments."
    },
    {
      icon: <CalculateIcon fontSize="small" />,
      text: "10 hours of CME hours are earned by completing your Certification Exam."
    },
    {
      icon: <CheckCircleIcon fontSize="small" />,
      text: "Additional CME hours can be earned by completing programs."
    },
    {
      icon: <CalendarMonthIcon fontSize="small" />,
      text: "You can earn a maximum of 25 CME hours per calendar year."
    }
  ]

  return (
    <Card
      sx={{
        background: "#eaf6fb",
        border: "1px solid #8fd1f4",
        borderRadius: 2
      }}
    >
      <CardContent>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            mb: 2,
            color: "#1d3b53"
          }}
        >
          How do I earn CME Credits?
        </Typography>

        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              mb: index !== items.length - 1 ? 2 : 0
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#2fa7dc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                flexShrink: 0
              }}
            >
              {item.icon}
            </Box>

            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.6,
                color: "#2c3e50"
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  )
}