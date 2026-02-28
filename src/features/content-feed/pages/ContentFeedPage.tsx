import { Box } from "@mui/material";
import FeedHero from "../components/FeedHero";
import TrendingSection from "../components/TrendingSection";
import ArticleSection from "../components/ArticleSection";
import VideoSection from "../components/VideoSection";

export default function ContentFeedPage() {
  return (
    <Box
      sx={{
        maxWidth: 1400,

      }}
    >
      <FeedHero />

      <Box
        sx={{
            mt: 4,
            border: "1px solid rgba(0,0,0,0.2)",
            borderRadius: 1,
            paddingLeft:"20px"
        }}
        >
        <TrendingSection />
        </Box>

      <Box sx={{ mt: 5 }}>
        <ArticleSection />
      </Box>

      <Box sx={{ mt: 5 }}>
        <VideoSection />
      </Box>
    </Box>
  );
}