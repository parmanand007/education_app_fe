import {
  Box,
  Button,
  Menu,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";

export type LeaderboardAssignmentType =
  | "CLINIC"
  | "GROUP"
  | "ORG";

interface Props {
  value: LeaderboardAssignmentType;
  onChange: (value: LeaderboardAssignmentType) => void;
}

export default function LeaderboardFilter({
  value,
  onChange,
}: Props) {
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selected =
      event.target.value as LeaderboardAssignmentType;

    onChange(selected);
    handleClose();
  };

  return (
    <>
      {/* Filter Button */}
      <Button
        variant="outlined"
        startIcon={<FilterListIcon />}
        onClick={handleOpen}
        sx={{
          textTransform: "none",
          borderRadius: 2,
          height: 40,
          px: 2,
        }}
      >
        Filter
      </Button>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box px={2.5} py={2} minWidth={220}>
          <Typography
            fontWeight={600}
            fontSize={14}
            mb={1.5}
          >
            Filter by Type
          </Typography>

          <RadioGroup
            value={value}
            onChange={handleSelect}
          >
            <FormControlLabel
              value="CLINIC"
              control={<Radio />}
              label="Clinic"
            />
            <FormControlLabel
              value="GROUP"
              control={<Radio />}
              label="User Group"
            />
            <FormControlLabel
              value="ORG"
              control={<Radio />}
              label="Organization"
            />
          </RadioGroup>
        </Box>
      </Menu>
    </>
  );
}