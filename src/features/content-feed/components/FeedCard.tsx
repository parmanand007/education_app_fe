import { Box, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import type { FeedItem } from "../api/contentFeed.types";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  item: FeedItem;
}

export default function FeedCard({ item }: Props) {
  const isVideo = item.feed.post_type === "VIDEO";
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(`/content-feed/${item.feed.post_id}`, {
      state: {
        from: location.pathname + location.search, 
        type: item.feed.post_type,
        liked: item.liked,
        likes_count: item.likes_count,
      },
    });
  };


  return (
    <Box
      sx={{
        backgroundColor:"background.paper",
        border: "1px solid #e5e7eb",
        borderRadius: 1,
        p: 2,
      }}
      onClick={handleClick}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 600,
          mb: 1.5,
          minHeight: 24,
        }}
      >
        {item.feed.title}
      </Typography>

      {/* Image Section */}
<Box
  sx={{
    position: "relative",
    borderRadius: 1,
    overflow: "hidden",
    height: 200,
    backgroundColor: "#f3f4f6", // fallback background
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {item.feed.thumbnail ? (
    <Box
      component="img"
      src={item.feed.thumbnail}
      alt={item.feed.title}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  ) : (
    <Typography
      sx={{
        fontSize: 14,
        color: "#9ca3af",
        fontWeight: 500,
      }}
    >
      No Preview Available
    </Typography>
  )}

  {/* Category Pill */}
  {item.feed.categories?.[0] && (
    <Box
      sx={{
        position: "absolute",
        top: 12,
        left: 12,
        backgroundColor: "#fff",
        px: 1.5,
        py: 0.5,
        borderRadius: 10,
        fontSize: 11,
        fontWeight: 600,
        color: "#fb923c"
      }}
    >
      {item.feed.categories[0]}
    </Box>
  )}

  {/* Play Overlay for Video */}
  {isVideo && (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 70,
        height: 70,
        borderRadius: "50%",
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PlayArrowIcon sx={{ fontSize: 34, color: "#fff" }} />
    </Box>
  )}
</Box>

      {/* Bottom Stats Row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 1.5,
          fontSize: 13,
          color: "#6b7280",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <FavoriteBorderIcon sx={{ fontSize: 16 }} />
            {item.likes_count}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <ChatBubbleOutlineIcon sx={{ fontSize: 16 }} />
            {item.comments_count}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <BarChartIcon sx={{ fontSize: 16 }} />
            {item.views_count}
          </Box>
        </Box>

        <Typography sx={{ fontSize: 12 }}>
          about 1 year ago
        </Typography>
      </Box>
    </Box>
  );
}