import {
  Box,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Topbar() {
  return (
    <Box
      sx={{
        height: 72,
        background: "#ffffff",
        borderBottom: "1px solid #e6edf3",
        display: "flex",
        alignItems: "center",
        px: 4,
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ flex: 1 }} />

      <Box sx={{ width: 420 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ mr: 1, color: "#9aa4b2" }} />
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              backgroundColor: "#f6f9fc",
            },
          }}
        />
      </Box>

      <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: "none",
            borderRadius: 2,
            fontSize: 13,
          }}
        >
          Contact Support
        </Button>

        <Avatar sx={{ width: 36, height: 36 }} />
      </Box>
    </Box>
  );
}
