import { MenuItem, Select } from "@mui/material";
import { DateRangeType } from "../../../shared/utils/dateRange";

interface Props {
  value: DateRangeType;
  onChange: (value: DateRangeType) => void;
}

export default function DateRangeFilter({ value, onChange }: Props) {
  return (
    <Select
      size="small"
      value={value}
      onChange={(e) => onChange(e.target.value as DateRangeType)}
    >
      <MenuItem value="THIS_MONTH">This Month</MenuItem>
      <MenuItem value="LAST_6_MONTHS">Last 6 Months</MenuItem>
      <MenuItem value="YEAR_TO_DATE">Year to Date</MenuItem>
      <MenuItem value="LAST_YEAR">Last Year</MenuItem>
    </Select>
  );
}