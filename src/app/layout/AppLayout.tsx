import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <Box sx={{ display: "flex", height: "100vh", background: "#f6f9fc" }}>
      <Sidebar />

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: 5,
            py: 4,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
