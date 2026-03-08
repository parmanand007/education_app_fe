import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography
} from "@mui/material"

import { Dispatch, SetStateAction, useState } from "react"
import { QuestionReviewFilters } from "../api/questionReview.types"

interface Props {
  filters: QuestionReviewFilters
  setFilters: Dispatch<SetStateAction<QuestionReviewFilters>>
}

const DATE_OPTIONS = [
  { label: "This Week", value: "this_week" },
  { label: "Last Week", value: "last_week" },
  { label: "This Month", value: "this_month" },
  { label: "Last 3 Months", value: "last_3_months" },
  { label: "Last 6 Months", value: "last_6_months" },
  { label: "Last 9 Months", value: "last_9_months" },
  { label: "Last Year", value: "last_year" },
  { label: "This Year", value: "this_year" }
]

export default function DateDropdown({
  filters,
  setFilters
}: Props) {

  const [value, setValue] = useState("this_year")

  const isSelected = value !== ""

  const handleChange = (val: string) => {

    const now = new Date()
    let start = new Date()

    switch (val) {

      case "this_week":
        start = new Date()
        start.setDate(now.getDate() - now.getDay())
        break

      case "last_week":
        start = new Date()
        start.setDate(now.getDate() - now.getDay() - 7)
        break

      case "this_month":
        start = new Date(now.getFullYear(), now.getMonth(), 1)
        break

      case "last_3_months":
        start = new Date(now.getFullYear(), now.getMonth() - 3, 1)
        break

      case "last_6_months":
        start = new Date(now.getFullYear(), now.getMonth() - 6, 1)
        break

      case "last_9_months":
        start = new Date(now.getFullYear(), now.getMonth() - 9, 1)
        break

      case "last_year":
        start = new Date(now.getFullYear() - 1, 0, 1)
        break

      case "this_year":
      default:
        start = new Date(now.getFullYear(), 0, 1)
        break
    }

    setValue(val)

    setFilters(prev => ({
      ...prev,
      start_date: start.toISOString(),
      end_date: new Date().toISOString(),
      page: 1
    }))
  }

  return (
    <Box sx={{ position: "relative", width: 240 }}>

      <Typography
        sx={{
          position: "absolute",
          top: 4,
          left: 14,
          fontSize: 12,
          fontWeight: 500,
          color: isSelected ? "#fff" : "text.secondary",
          pointerEvents: "none",
          zIndex: 1
        }}
      >
        Date
      </Typography>

      <FormControl fullWidth>

        <Select
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          sx={{
            height: 56,
            borderRadius: "10px",

            bgcolor: isSelected ? "brand.dark" : "background.paper",
            color: isSelected ? "#fff" : "text.primary",

            "& .MuiSelect-select": {
              pt: "14px",
              pb: "4px"
            },

            "& .MuiSelect-icon": {
              color: isSelected ? "#fff" : "text.secondary"
            }
          }}
        >
          {DATE_OPTIONS.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>

      </FormControl>

    </Box>
  )
}