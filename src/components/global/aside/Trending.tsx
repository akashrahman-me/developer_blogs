import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArticleEllipsis from "./ArticleEllipsis";

function Trending() {
  return (
    <div>
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          marginBottom: 2.5,
        }}
      >
        <Box
          component="span"
          sx={{
            bgcolor: "#2EAD4B",
            width: 8,
            aspectRatio: "1/1",
            borderRadius: 999,
            display: "inline-block",
          }}
        />
        What Trending Today
      </Typography>
      <Stack spacing={2.5}>
        <ArticleEllipsis />
        <ArticleEllipsis />
        <ArticleEllipsis />
      </Stack>
    </div>
  );
}

export default Trending;
