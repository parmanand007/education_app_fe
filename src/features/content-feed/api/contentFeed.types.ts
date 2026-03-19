export type PostType = "ARTICLE" | "VIDEO";

export interface FeedItem {
  id: number;
  feed: {
    post_id: string;
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

export interface ContentDetail {
  post_id: string;
  post_type: "ARTICLE" | "VIDEO";

  title: string | null;
  description: string | null;

  thumbnail: string | null;
  image: string | null;
  media: string | null;

  categories: string[];

  internal_notes?: string;

  trending_views: number;
  trending_likes: number;
  trending_comments: number;
  liked?: boolean;

  added_on: string;
}