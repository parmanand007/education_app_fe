import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Avatar
} from "@mui/material"
import AdjustIcon from "@mui/icons-material/Adjust"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined"
import { useTheme } from "@mui/material/styles"

interface Props {
  label: string
  hours: number
}

export default function CMEYearCard({ label, hours }: Props) {
  const theme = useTheme()
  const isCurrent = label === "CURRENT YEAR"

  return (
    <Card
      sx={{
        mb: 2,
        height: 180,
        borderRadius: 1,
        border: isCurrent
          ? `2px solid ${theme.palette.primary.main}`
          : "1px solid #d9d9d9",
        background: isCurrent ? "#ffffff" : "#f5f5f5",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.05)"
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap={2}>
            <Avatar
              sx={{
                width: 44,
                height: 44,
                bgcolor: "#bdbdbd",
                fontSize: 16,
                fontWeight: 600
              }}
            >
              PP
            </Avatar>

            <Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  letterSpacing: 0.5
                }}
              >
                {label}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  mt: 0.5
                }}
              >
                Total CME Hours Earned
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <AdjustIcon sx={{ fontSize: 16, color: theme.palette.primary.main }} />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.main
              }}
            >
              {hours}
            </Typography>
          </Box>
        </Box>

        {isCurrent && (
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Button
              variant="contained"
              startIcon={<ContentCopyOutlinedIcon />}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: 2
              }}
            >
              Request Certification
            </Button>

            <Button
              startIcon={<ShareOutlinedIcon />}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                color: theme.palette.text.primary
              }}
            >
              Share Certificate
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}