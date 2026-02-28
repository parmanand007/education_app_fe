import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TOPBAR_HEIGHT = 64;

export default function Topbar() {
  return (
    <Box
      sx={{
        height: TOPBAR_HEIGHT,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 4,
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: "background.paper",
      }}
    >
      {/* -------- BRAND -------- */}
      <Typography
        sx={{
          fontSize: 22,
          fontWeight: 700,
          color: "primary.main",
          letterSpacing: 1,
        }}
      >
        DOCTUSTECH
      </Typography>

      {/* -------- SEARCH -------- */}
      <TextField
        placeholder="Search..."
        size="small"
        sx={{ width: 400 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />

      {/* -------- SUPPORT BUTTON -------- */}
      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          borderRadius: 2,
        }}
      >
        Contact Support
      </Button>
    </Box>
  );
}
