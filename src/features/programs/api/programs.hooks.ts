import { useQuery } from "@tanstack/react-query";
import { fetchPrograms } from "./programs.api";

export const usePrograms = (
  params?: Parameters<typeof fetchPrograms>[0]
) => {
  return useQuery({
    queryKey: ["programs", params],
    queryFn: () => fetchPrograms(params),
  });
};
