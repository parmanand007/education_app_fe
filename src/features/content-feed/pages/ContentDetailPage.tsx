import {
  Box,
  Typography,
  CircularProgress,
  Chip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useNavigate, useParams, useLocation } from "react-router-dom";

import {
  useContentDetail,
  useToggleLike,
} from "../api/contentFeed.hooks";

import CommentsSection from "../components/CommentSection";

export default function ContentDetailPage() {
  const navigate = useNavigate();
  const { post_id } = useParams();
  const location = useLocation();

  const from = location.state?.from;
  const type = location.state?.type;

  // HYDRATE FROM FEED
  const initialData = location.state
    ? {
        liked: location.state.liked,
        trending_likes: location.state.likes_count,
      }
    : undefined;

  const {
    data,
    isLoading,
    isError,
  } = useContentDetail(post_id || "", initialData);

  const {
    mutate: toggleLike,
    isPending,
  } = useToggleLike(post_id || "");

  const handleBack = () => {
    if (from) navigate(from);
    else if (type) navigate(`/content-feed?type=${type}`);
    else navigate("/content-feed");
  };

  // STRICT TOGGLE
  const handleLike = () => {
    if (!post_id || isPending) return;

    const action = data?.liked ? 0 : 1;
    toggleLike(action);
  };

  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );

  if (isError || !data)
    return <Typography color="error">Failed to load</Typography>;

  const item = data;

  const title = item.title || "Untitled";
  const description =
    item.description || item.internal_notes || "No content";

  const imageSrc = item.thumbnail || item.image || null;

  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          height: 260,
          borderRadius: 2,
          overflow: "hidden",
          background: imageSrc
            ? `url(${imageSrc})`
            : "linear-gradient(135deg, #f97316, #fb923c)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          onClick={handleBack}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            display: "flex",
            gap: 1,
            alignItems: "center",
            cursor: "pointer",
            color: imageSrc ? "#fff" : "#111",
            backgroundColor: imageSrc
              ? "rgba(0,0,0,0.4)"
              : "rgba(0,0,0,0.08)",
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
          }}
        >
          <ArrowBackIcon fontSize="small" />
          Back
        </Box>
      </Box>

      {/* CONTENT */}
      <Box sx={{ mt: 3, display: "flex", gap: 4 }}>
        {/* LEFT */}
        <Box sx={{ flex: 2 }}>
          <Typography variant="h5">{title}</Typography>

          {item.categories?.[0] && (
            <Chip label={item.categories[0]} sx={{ mt: 1 }} />
          )}

          {/* LIKE */}
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <Box
              onClick={handleLike}
              sx={{
                display: "flex",
                gap: 0.5,
                cursor: isPending ? "not-allowed" : "pointer",
                opacity: isPending ? 0.6 : 1,
                alignItems: "center",
              }}
            >
              {item.liked ? (
                <FavoriteIcon sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon />
              )}

              <Typography>{item.trending_likes}</Typography>
            </Box>

            <Typography>💬 {item.trending_comments}</Typography>
            <Typography>👁 {item.trending_views}</Typography>
          </Box>

          <Typography sx={{ mt: 2 }}>{description}</Typography>
        </Box>

        {/* RIGHT */}
        <Box sx={{ flex: 1 }}>
          <CommentsSection postId={item.post_id} />
        </Box>
      </Box>
    </Box>
  );
}