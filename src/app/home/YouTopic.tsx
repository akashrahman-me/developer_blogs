import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

function YouTopic() {
  return (
    <Box
      aria-label="Topics"
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
        marginBottom: 4,
      }}
    >
      <Typography
        variant="body2"
        color="gray"
        fontWeight="600"
        textTransform="uppercase"
      >
        your topics
      </Typography>
      <Box sx={{display: "flex", gap: 2}}>
        {["Gaming", "Android Development", "Freelancing"].map((_, index) => (
          <Chip key={index} label={_} />
        ))}
      </Box>
    </Box>
  );
}

export default YouTopic;
