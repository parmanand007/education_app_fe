import { useQuery } from "@tanstack/react-query";
import { fetchContentFeed, FeedQueryParams } from "./contentFeed.api";

export const useContentFeed = (params: FeedQueryParams) =>
  useQuery({
    queryKey: ["feed", JSON.stringify(params)],
    queryFn: () => fetchContentFeed(params),
    staleTime: 1000 * 60 * 5,
  });