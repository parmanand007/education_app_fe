import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { QuestionReviewFilters } from "../api/questionReview.types"

interface Props {
  filters: QuestionReviewFilters
  setFilters: Dispatch<SetStateAction<QuestionReviewFilters>>
}

export default function DateDropdown({
  filters,
  setFilters
}: Props) {

  const [value, setValue] = useState("this_year")

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
    <FormControl size="small" sx={{ width: 180 }}>

      <InputLabel shrink>Date</InputLabel>

      <Select
        label="Date"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        <MenuItem value="this_week">This Week</MenuItem>
        <MenuItem value="last_week">Last Week</MenuItem>
        <MenuItem value="this_month">This Month</MenuItem>
        <MenuItem value="last_3_months">Last 3 Months</MenuItem>
        <MenuItem value="last_6_months">Last 6 Months</MenuItem>
        <MenuItem value="last_9_months">Last 9 Months</MenuItem>
        <MenuItem value="last_year">Last Year</MenuItem>
        <MenuItem value="this_year">This Year</MenuItem>
      </Select>

    </FormControl>
  )
}