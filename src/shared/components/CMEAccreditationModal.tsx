import { Dialog, DialogContent, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CMEAccreditationModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogContent sx={{ p: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography fontWeight={700} fontSize={20}>
            Our CME Accreditation
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {[
          "Designation Statement",
          "Credit Designation",
          "Mitigation of Relevant Financial Relationships",
          "Disclosures of Authors / Content Writers",
          "Disclosures of Educational Planners",
        ].map((title) => (
          <Box
            key={title}
            sx={{
              backgroundColor: "#F3F4F6",
              borderRadius: 2,
              p: 3,
              mb: 3,
            }}
          >
            <Typography fontWeight={700} mb={1}>
              {title}
            </Typography>
            <Typography fontSize={14} color="text.secondary">
              Sample placeholder content matching your screenshot structure.
            </Typography>
          </Box>
        ))}
      </DialogContent>
    </Dialog>
  );
}