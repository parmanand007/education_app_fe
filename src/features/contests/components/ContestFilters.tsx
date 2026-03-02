import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

interface Props {
  ordering: string;
  assignmentType: string[];
  status: number[];
  onChange: (field: string, value: any) => void;
}

export default function ContestFilters({
  ordering,
  assignmentType,
  status,
  onChange,
}: Props) {
  const selectSx = {
    height: 40,
    minWidth: 190,
    backgroundColor: "#fff",
    borderRadius:0.5 ,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D0D5DD",
    },
  };

  const handleOrderingChange = (event: SelectChangeEvent) => {
    onChange("ordering", event.target.value);
  };

  const handleAssignmentChange = (
    event: SelectChangeEvent<string[]>
  ) => {
    const value = event.target.value as string[];
    onChange("assignment_type", value);
  };

  const handleStatusChange = (
    event: SelectChangeEvent<number[]>
  ) => {
    const value = event.target.value as number[];
    onChange("status", value);
  };

  return (
    <Box display="flex" gap={2} flexWrap="wrap">
      {/* Sort */}
      <FormControl size="small">
        <Select
          value={ordering}
          onChange={handleOrderingChange}
          sx={selectSx}
        >
          <MenuItem value="-start_date">
            Sort By: Recent First ↑
          </MenuItem>
          <MenuItem value="start_date">
            Sort By: Oldest First ↓
          </MenuItem>
        </Select>
      </FormControl>

      {/* Assignment Types */}
      <FormControl size="small">
        <Select
          multiple
          value={assignmentType}
          onChange={handleAssignmentChange}
          displayEmpty
          renderValue={(selected) => {
            if ((selected as string[]).length === 0) {
              return (
                <Typography color="#667085">
                  Assignment Types
                </Typography>
              );
            }
            return (selected as string[]).join(", ");
          }}
          sx={selectSx}
        >
          <MenuItem value="ORG">ORG</MenuItem>
          <MenuItem value="GROUP">GROUP</MenuItem>
          <MenuItem value="CLINIC">CLINIC</MenuItem>
        </Select>
      </FormControl>

      {/* Contest Status */}
      <FormControl size="small">
        <Select
          multiple
          value={status}
          onChange={handleStatusChange}
          displayEmpty
          renderValue={(selected) => {
            if ((selected as number[]).length === 0) {
              return (
                <Typography color="#667085">
                  Contest Status
                </Typography>
              );
            }

            const statusMap: Record<number, string> = {
              1: "Ongoing",
              2: "Completed",
              3: "Upcoming",
            };

            return (selected as number[])
              .map((s) => statusMap[s])
              .join(", ");
          }}
          sx={selectSx}
        >
          <MenuItem value={1}>Ongoing</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
          <MenuItem value={3}>Upcoming</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}