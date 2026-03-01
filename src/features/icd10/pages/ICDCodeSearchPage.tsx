import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";

export default function ICDCodeSearchPage() {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        pt: 6,
      }}
    >
      {/* Title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1.5,
          mb: 4,
        }}
      >
        <AppsIcon sx={{ fontSize: 20, color: "#1976d2" }} />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            letterSpacing: 0.3,
          }}
        >
          ICD10 Codes
        </Typography>
      </Box>

      {/* Search Bar */}
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #d0d7de",
          borderRadius: 2,
          px: 2,
          py: 1.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            fullWidth
            placeholder="Search ICD-10 Codes"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#9e9e9e" }} />
                </InputAdornment>
              ),
            }}
          />

          <Button
  startIcon={<SearchIcon fontSize="small" />}
  variant="contained"
  sx={{
    textTransform: "none",
    px: 3,
    height: 40,
    borderRadius: 2,
    opacity: 2.8,
    "&:hover": {
      opacity: 1,
    },
  }}
>
  Search
</Button>

        </Box>
      </Paper>
    </Box>
  );
}