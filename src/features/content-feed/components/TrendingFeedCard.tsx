import { Box, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import type { FeedItem } from "../api/contentFeed.types";

interface Props {
  item: FeedItem;
}

export default function TrendingFeedCard({ item }: Props) {
  const isVideo = item.feed.post_type === "VIDEO";

  return (
    <Box
      sx={{
        position: "relative",
        width: 260,
        height: 340,
        borderRadius: 3,
        overflow: "hidden",
        flexShrink: 0,
        cursor: "pointer",
        backgroundColor: "#f3f4f6",
      }}
    >
      {/* Background Image */}
      {item.feed.thumbnail && (
        <Box
          component="img"
          src={item.feed.thumbnail}
          alt={item.feed.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
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
            color: "#f97316",
          }}
        >
          {item.feed.categories[0]}
        </Box>
      )}

      {/* Play Icon */}
      {isVideo && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 64,
            height: 64,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PlayArrowIcon sx={{ fontSize: 32, color: "#111827" }} />
        </Box>
      )}

      {/* Bottom Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 600,
            color: "#38bdf8",
            mb: 0.5,
          }}
        >
          {isVideo
            ? `WATCHED BY ${item.views_count} PEOPLE`
            : `READ BY ${item.views_count} PEOPLE`}
        </Typography>

        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1.3,
          }}
        >
          {item.feed.title}
        </Typography>
      </Box>
    </Box>
  );
}