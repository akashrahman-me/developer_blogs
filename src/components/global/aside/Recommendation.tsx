import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const recomondedTopics = [
  "Gaming",
  "Android Development",
  "Flutter App Dev",
  "IOS App Dev",
  "Politics",
  "Religion",
  "Finance",
];

function Recommendation() {
  return (
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
  );
}

export default Recommendation;
