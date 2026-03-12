export interface ProgramsQueryParams {
  status?: number[]
  program_assignment_status?: "assigned" | "expired"
}


export interface ProgramChaptersQueryParams {
  page?: number
  page_size?: number
}