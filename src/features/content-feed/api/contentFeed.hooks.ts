import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchContentFeed, FeedQueryParams, fetchContentDetail, fetchComments, addComment, toggleLikeApi } from "./contentFeed.api";

export const useContentFeed = (params: FeedQueryParams) =>
  useQuery({
    queryKey: ["feed", JSON.stringify(params)],
    queryFn: () => fetchContentFeed(params),
    staleTime: 1000 * 60 * 5,
  });

export const useContentDetail = (id: string,initialData?: any) =>
  useQuery({
    queryKey: ["content-detail", id],
    queryFn: () => fetchContentDetail(id),
    enabled: !!id,
    initialData,
  });


  export const useComments = (postId: string) =>
  useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
    enabled: !!postId,
  });

export const useAddComment = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: string) => addComment(postId, content),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
  });
};


export const useToggleLike = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (like: number) => toggleLikeApi(postId, like),

    onMutate: async (like) => {
      await queryClient.cancelQueries({ queryKey: ["content-detail", postId] });

      const prev = queryClient.getQueryData<any>([
        "content-detail",
        postId,
      ]);

      if (prev) {
        queryClient.setQueryData(["content-detail", postId], {
          ...prev,
          trending_likes: prev.trending_likes + (like ? 1 : -1),
          liked: !!like,
        });
      }

      return { prev };
    },

    onSuccess: (data) => {
      // DETAIL CACHE
      queryClient.setQueryData(["content-detail", postId], (old: any) => {
        if (!old) return old;

        return {
          ...old,
          trending_likes: data.like_count,
          liked: data.liked,
        };
      });

      // FEED CACHE
      queryClient.setQueriesData(
        { queryKey: ["feed"] },
        (old: any) => {
          if (!old) return old;

          return {
            ...old,
            results: old.results.map((item: any) => {
              if (item.feed.post_id === postId) {
                return {
                  ...item,
                  liked: data.liked,
                  likes_count: data.like_count,
                };
              }
              return item;
            }),
          };
        }
      );
    },

    onError: (_, __, ctx) => {
      if (ctx?.prev) {
        queryClient.setQueryData(
          ["content-detail", postId],
          ctx.prev
        );
      }
    },
  });
};