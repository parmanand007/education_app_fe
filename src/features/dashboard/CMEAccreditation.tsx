import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import CMEAccreditationModal from "../../shared/components/CMEAccreditationModal";

export default function CMEAccreditation({ description }: { description: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F3E9D8",
          borderRadius: "28px",
          padding: "48px",
          minHeight: 260,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 700,
            mb: 2,
            color: "#1E3A5F",
          }}
        >
          Our CME Accreditation
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            color: "#374151",
            lineHeight: 1.6,
            maxWidth: 520,
            mb: 3,
          }}
        >
          {description}
        </Typography>

        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{
            mt: 1,
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: (theme) => theme.palette.brand.tag,
            color: "#fff",
            px: 1.5,
            py: 0.5,
            borderRadius: 0.5,
            fontSize: 12,
            fontWeight: 500,
            }}
        >
          View Detail →
        </Button>

        <Box
          sx={{
            position: "absolute",
            right: 40,
            bottom: 24,
            width: 160,
            height: 120,
            borderRadius: 4,
            backgroundColor: "#E6D9C4",
          }}
        />
      </Box>

      <CMEAccreditationModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}