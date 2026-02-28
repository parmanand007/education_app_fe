import { Box } from "@mui/material";
import FeedCard from "./FeedCard";
import FeedSectionWrapper from "./FeedSectionWrapper";
import { useContentFeed } from "../api/contentFeed.hooks";

export default function ArticleSection() {
  const { data } = useContentFeed({
    ordering: "-start_date",
    feed__post_type: "ARTICLE",
  });

  const items = data?.results ?? [];

  return (
    <FeedSectionWrapper title="Articles">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        {items.map((item) => (
          <FeedCard key={item.feed.id} item={item} />
        ))}
      </Box>
    </FeedSectionWrapper>
  );
}