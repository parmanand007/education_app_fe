// PageHeader.tsx
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  breadcrumb?: { label: string; to?: string }[];
}

export default function PageHeader({ title, breadcrumb }: Props) {
  return (
    <Box sx={{ mb: 4 }}>
      {breadcrumb && (
        <Box sx={{ mb: 1 }}>
          {breadcrumb.map((item, index) => (
            <Typography
              key={index}
              component={item.to ? Link : "span"}
              to={item.to}
              sx={{
                fontSize: 14,
                color: item.to ? "primary.main" : "text.secondary",
                textDecoration: "none",
                mr: 1,
              }}
            >
              {item.label}
              {index < breadcrumb.length - 1 && " / "}
            </Typography>
          ))}
        </Box>
      )}

      <Typography
        sx={{
          fontSize: 28,
          fontWeight: 700,
          color: "#0f2f44",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
