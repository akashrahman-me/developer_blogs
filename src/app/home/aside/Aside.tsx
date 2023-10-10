import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import ArticleEllipsis from "./ArticleEllipsis";

const recomondedTopics = [
  "Gaming",
  "Android Development",
  "Flutter App Dev",
  "IOS App Dev",
  "Politics",
  "Religion",
  "Finance",
];

function Aside() {
  return (
    <div>
      <Box sx={{width: 300, paddingY: 5}}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              "& input": {
                paddingY: 1.5,
              },
              "& fieldset": {
                borderRadius: 999,
              },
            },
          }}
          sx={{marginBottom: 4}}
        />
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
        <Divider sx={{marginY: 3}} />
        <Box>
          <Typography variant="h6" sx={{marginBottom: 2}} fontWeight={600}>
            Recommended topics
          </Typography>
          <Stack flexWrap="wrap" direction="row" sx={{gap: 1.5}}>
            {recomondedTopics.map((_) => (
              <Chip key={_} label={_} />
            ))}
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default Aside;
