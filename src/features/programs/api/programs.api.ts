import { apiClient } from "../../../services/apiClient";
import type {
  Program,
  ProgramDetail,
  ProgramChaptersResponse,
  ProgramResult
} from "./programs.types";



export interface ProgramsQueryParams {
  status?: number[];
  program_assignment_status?: "assigned" | "expired";
}



export interface ProgramsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Program[];
}



export const fetchPrograms = async (
  params?: ProgramsQueryParams
): Promise<ProgramsResponse> => {
  const query = new URLSearchParams();

  if (params?.status?.length) {
    query.append("status", params.status.join(","));
  }

  if (params?.program_assignment_status) {
    query.append(
      "program_assignment_status",
      params.program_assignment_status
    );
  }

  const { data } = await apiClient.get(
    `/v2/programs/?${query.toString()}`
  );

  return data;
};



/* Program Detail */

export const fetchProgramDetail = async (
  programId: string
): Promise<ProgramDetail> => {

  const { data } = await apiClient.get(
    `/v2/programs/${programId}/`
  );

  return data;
};



/* Program Chapters */

export interface ProgramChaptersQueryParams {
  page?: number;
  page_size?: number;
}



export const fetchProgramChapters = async (
  programId: string,
  params?: ProgramChaptersQueryParams
): Promise<ProgramChaptersResponse> => {

  const { data } = await apiClient.get(
    `/v2/programs/${programId}/chapters/`,
    {
      params
    }
  );

  return data;
};

export const fetchChapterQuestions = async (
  chapterId: string
) => {

  const { data } = await apiClient.get(
    `/v1/web/programs/chapters/${chapterId}/questions/`
  )

  return data
}

export const submitProgramAnswer = async (
  chapterId: string,
  questionId: string,
  answer: string[],
  tta: number
) => {

  const payload = {
    chapter_id: chapterId,
    user_answers: {
      [questionId]: {
        answer,
        tta: String(tta)
      }
    }
  }

  const { data } = await apiClient.post(
    "/v1/web/programs/submissions/",
    payload
  )

  return data
}

export const fetchProgramResult = async (
  programId: string
): Promise<ProgramResult> => {

  const { data } = await apiClient.get<ProgramResult>(
    `v2/programs/${programId}/result/`
  )

  return data
}