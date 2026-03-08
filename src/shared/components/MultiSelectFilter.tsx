import {
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
  Box,
  Typography
} from "@mui/material"

interface Option {
  value: string
  label: string
}

interface MultiSelectFilterProps {
  label: string
  options: Option[]
  value: string[]
  onChange: (value: string[]) => void
  width?: number
}

export default function MultiSelectFilter({
  label,
  options,
  value,
  onChange,
  width = 240
}: MultiSelectFilterProps) {

  const isSelected = value.length > 0

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const val = event.target.value
    onChange(typeof val === "string" ? val.split(",") : val)
  }

  return (
    <Box sx={{ position: "relative", width }}>

      <Typography
        sx={{
          position: "absolute",
          top: 6,
          left: 14,
          fontSize: 12,
          fontWeight: 500,
          color: isSelected ? "#fff" : "text.secondary",
          pointerEvents: "none",
          zIndex: 1
        }}
      >
        {label}
      </Typography>

      <FormControl fullWidth>

        <Select
          multiple
          displayEmpty
          value={value}
          onChange={handleChange}
          renderValue={(selected) =>
            selected.length ? `${selected.length} Selected` : "All"
          }
          sx={{
  height: 56,
  borderRadius: "10px",

  "& .MuiSelect-select": {
    pt: "14px",
    pb: "4px",
  },

  bgcolor: isSelected ? "brand.dark" : "background.paper",
  color: isSelected ? "#fff" : "text.primary",

  "& .MuiSelect-icon": {
    color: isSelected ? "#fff" : "text.secondary"
  }
}}
        >

          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox checked={value.includes(option.value)} />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}

        </Select>

      </FormControl>

    </Box>
  )
}