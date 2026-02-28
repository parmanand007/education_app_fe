import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const TOPBAR_HEIGHT = 64;
const SIDEBAR_WIDTH = 240;

export default function AppLayout() {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* -------- TOPBAR -------- */}
      <Topbar />

      {/* -------- MAIN BODY -------- */}
      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        
        {/* -------- SIDEBAR -------- */}
        <Sidebar />

        {/* -------- PAGE CONTENT -------- */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: 4,
            py: 4,
            backgroundColor: "background.paper",

            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
