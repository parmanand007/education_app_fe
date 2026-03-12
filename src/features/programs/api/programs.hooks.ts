import { useQuery } from "@tanstack/react-query";

import {
  fetchPrograms,
  fetchProgramDetail,
  fetchProgramChapters
} from "./programs.api";



export const usePrograms = (
  params?: Parameters<typeof fetchPrograms>[0]
) => {
  return useQuery({
    queryKey: ["programs", params],
    queryFn: () => fetchPrograms(params),
  });
};



export const useProgramDetail = (
  programId?: string
) => {
  return useQuery({
    queryKey: ["program-detail", programId],
    queryFn: () => fetchProgramDetail(programId!),
    enabled: !!programId,
  });
};



export const useProgramChapters = (
  programId?: string,
  params?: Parameters<typeof fetchProgramChapters>[1]
) => {
  return useQuery({
    queryKey: ["program-chapters", programId, params],
    queryFn: () => fetchProgramChapters(programId!, params),
    enabled: !!programId,
  });
};