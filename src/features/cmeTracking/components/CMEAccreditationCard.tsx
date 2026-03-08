import { Box, Card, CardContent, Typography, Button } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useTheme } from "@mui/material/styles"

export default function CMEAccreditationCard() {
  const theme = useTheme()

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          mb: 1.5,
          fontWeight: 600,
          color: "#174a7c"
        }}
      >
        Our CME Accreditation
      </Typography>

      <Card
        sx={{
          background: "#f4efe3",
          border: "1px solid #e3c78b",
          borderRadius: 1,
          boxShadow: "none",
          height: 180,
          mb:2
        }}
      >
        <CardContent
          sx={{
            p: 3
          }}
        >
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: "#2c3e50",
              lineHeight: 1.6
            }}
          >
            CME Accreditation ensures high-quality, relevant healthcare
            education, supporting ongoing professional development for
            providers.
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 1.5,
              color: "background.paper",
              px: 2.5,
              py: 0.8,
              backgroundColor: "#174a7c",
              "&:hover": {
                backgroundColor: "#123a63"
              }
            }}
          >
            View Detail
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}