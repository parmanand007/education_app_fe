import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText
} from "@mui/material"

import { Dispatch, SetStateAction } from "react"
import { usePrograms } from "../api/questionReview.hooks"
import { QuestionReviewFilters } from "../api/questionReview.types"

interface Props {
  filters: QuestionReviewFilters
  setFilters: Dispatch<SetStateAction<QuestionReviewFilters>>
}

export default function ProgramFilterDropdown({
  filters,
  setFilters
}: Props) {

  const { data } = usePrograms("")

  const handleChange = (value: string[]) => {
    setFilters(prev => ({
      ...prev,
      programs: value,
      page: 1
    }))
  }

  return (
    <FormControl size="small" sx={{ width: 220 }}>
  
  <InputLabel shrink>
    Program Name
  </InputLabel>

  <Select
    multiple
    displayEmpty
    value={filters.programs}
    label="Program Name"
    renderValue={(selected) =>
      selected.length === 0 ? "All" : `${selected.length} Selected`
    }
    onChange={(e) =>
      handleChange(e.target.value as string[])
    }
  >

    {data?.results.map((program) => (
      <MenuItem key={program.program_id} value={program.program_id}>
        <Checkbox checked={filters.programs.includes(program.program_id)} />
        <ListItemText primary={program.title} />
      </MenuItem>
    ))}

  </Select>

</FormControl>
  )
}