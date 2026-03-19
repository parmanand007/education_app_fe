import {
  Box,
  Typography,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useComments, useAddComment } from "../api/contentFeed.hooks";

export default function CommentsSection({ postId }: { postId: string }) {
  const { data } = useComments(postId);
  const { mutate } = useAddComment(postId);

  const [text, setText] = useState("");

  const comments = data?.results || [];

  const handleSubmit = () => {
    if (!text.trim()) return;
    mutate(text);
    setText("");
  };

  return (
    <Paper sx={{ p: 2, borderRadius: 2 }}>
      <Typography fontWeight={600}>
        Comments ({data?.count || 0})
      </Typography>

      {/* ONLY SHOW WHEN COMMENTS EXIST */}
      {comments.length > 0 && (
        <Box sx={{ mt: 2 }}>
          {comments.map((c) => (
            <Box key={c.comment_id} sx={{ mb: 2 }}>
              <Typography fontWeight={600}>{c.name}</Typography>
              <Typography variant="body2">{c.content}</Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* INPUT */}
      <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <IconButton onClick={handleSubmit}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}