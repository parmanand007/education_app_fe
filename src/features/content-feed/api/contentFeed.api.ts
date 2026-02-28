import { apiClient } from "../../../services/apiClient";
import { FeedItem } from "./contentFeed.types";

export interface FeedQueryParams {
  page?: number;
  page_size?: number;
  ordering?: string;
  trending?: number;
  feed__post_type?: "ARTICLE" | "VIDEO";
  search?: string;
}

interface FeedResponse {
  results: FeedItem[];
  count: number;
  next?: string | null;
  previous?: string | null;
}

export const fetchContentFeed = async (
  params: FeedQueryParams
): Promise<FeedResponse> => {
  const response = await apiClient.get<FeedResponse>(
    "/v2/content_feed/",
    {
      params: {
        page: 1,
        page_size: 10,
        ...params,
      },
    }
  );

  return response.data;
};