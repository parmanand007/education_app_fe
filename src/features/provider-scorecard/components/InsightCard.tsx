import { Box, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  borderColor: string;
  backgroundColor: string;
  icon: React.ReactNode;
  route?: string;
}

export default function InsightCard({
  title,
  description,
  borderColor,
  backgroundColor,
  route,
  icon,
}: Props) {
  const navigate = useNavigate();
  return (
    <Box
    onClick={() => route && navigate(route)}
      sx={{
        backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: 1,
        p: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        cursor: "pointer",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor,
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        },
        width: "210px",
        height: "170px",
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: "25%",
            backgroundColor: borderColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography fontWeight={600} fontSize={15} mb={0.5}>
            {title}
          </Typography>
          <Typography fontSize={13} color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Box>

      <ChevronRightIcon sx={{ color: borderColor, mt: 1 }} />
    </Box>
  );
}