import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";

interface Props {
  title: string;
  background: string;
  children: React.ReactNode;
}

export default function SectionContainer({ title, children,background }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: background,
        borderRadius: 3,
        p: 4,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
        <InfoOutlinedIcon sx={{ ml: 1, fontSize: 18 }} />
      </Box>

      {children}
    </Box>
  );
}