import { Box } from "@mui/material";
import FeedCard from "./FeedCard";
import FeedSectionWrapper from "./FeedSectionWrapper";
import { useContentFeed } from "../api/contentFeed.hooks";

export default function TrendingSection() {
  const { data, isLoading } = useContentFeed({
    ordering: "-feed__trending_likes",
    trending: 1,
  });

  const items = data?.results ?? [];

  return (
    <FeedSectionWrapper title="Most Trending">
      <Box
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
        }}
      >
        {items.map((item) => (
          <FeedCard key={item.feed.id} item={item} />
        ))}
      </Box>
    </FeedSectionWrapper>
  );
}