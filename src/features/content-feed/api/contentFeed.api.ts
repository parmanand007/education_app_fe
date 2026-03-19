import { apiClient } from "../../../services/apiClient";
import { ContentDetail, FeedItem } from "./contentFeed.types";

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

export const fetchContentDetail = async (
  id: string
): Promise<ContentDetail> => {
  const response = await apiClient.get(`/v2/content_feed/${id}/`);
  return response.data;
};

export interface Comment {
  comment_id: string;
  content: string;
  name: string;
  added_on: string;
}

export interface CommentResponse {
  count: number;
  results: Comment[];
}

export const fetchComments = async (postId: string): Promise<CommentResponse> => {
  const response = await apiClient.get("/v2/content_feed/comments/", {
    params: {
      post: postId,
      page: 1,
      page_size: 10,
      ordering: "-added_on",
    },
  });

  return response.data;
};

export const addComment = async (postId: string, content: string) => {
  const response = await apiClient.post("/v2/content_feed/comments/", {
    post: postId,
    content,
  });

  return response.data;
};

export const toggleLikeApi = async (postId: string, like: number) => {
  const response = await apiClient.post("/v1/feed_editorials/like/", {
    post: postId,
    like,
  });

  return response.data;
};