import {
  Checkbox,
  ListItemText,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from "@mui/material"

import { useLearningPoints } from "../api/questionReview.hooks"
import { Dispatch, SetStateAction } from "react"
import { QuestionReviewFilters } from "../api/questionReview.types"

interface Props {
  filters: QuestionReviewFilters
  setFilters: Dispatch<SetStateAction<QuestionReviewFilters>>
}

export default function LearningPointDropdown({
  filters,
  setFilters
}: Props) {

  const { data } = useLearningPoints("")

  const handleChange = (value: string[]) => {

    setFilters(prev => ({
      ...prev,
      learning_points: value,
      page: 1
    }))
  }

  return (
    <FormControl size="small" sx={{ width: 220 }}>

      <InputLabel shrink>Learning Points</InputLabel>

      <Select
        multiple
        label="Learning Points"
        displayEmpty
        value={filters.learning_points}
        onChange={(e) => handleChange(e.target.value as string[])}
        renderValue={(selected) =>
          selected.length === 0 ? "All" : `${selected.length} Selected`
        }
      >

        {data?.results.map((lp) => (
          <MenuItem key={lp} value={lp}>
            <Checkbox checked={filters.learning_points.includes(lp)} />
            <ListItemText primary={lp} />
          </MenuItem>
        ))}

      </Select>

    </FormControl>
  )
}