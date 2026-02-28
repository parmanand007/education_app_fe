export type PostType = "ARTICLE" | "VIDEO";

export interface FeedItem {
  id: number;
  feed: {
    id: number;
    title: string;
    description: string;
    thumbnail?: string;
    categories?: string[];
    post_type: PostType;
  };

  is_new: boolean;
  viewed: boolean;
  liked: boolean;
  likes_count: number;
  views_count: number;
  comments_count: number;
  saved: boolean;
  trending: boolean;
  rating?: number | null;
  review?: string | null;
}