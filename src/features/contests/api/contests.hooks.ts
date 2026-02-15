import { useQuery } from "@tanstack/react-query";
import { fetchContests } from "./contests.api";
import type { ContestQueryParams } from "./contests.api";

export const useContests = (params?: ContestQueryParams) => {
  return useQuery({
    queryKey: ["contests", params],
    queryFn: () => fetchContests(params),
  });
};
