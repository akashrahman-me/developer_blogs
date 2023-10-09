import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function ArticleCard() {
  return (
    <div>
      <Stack
        sx={{marginBottom: 1.5}}
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Avatar sx={{width: 28, height: 28}} />
          <Typography>Amira Daifi</Typography>
        </Stack>
        <Box
          sx={{
            width: 4,
            height: 4,
            backgroundColor: "gray",
            borderRadius: 9999,
          }}
        />
        <Typography variant="body2" color="gray">
          Jan 16
        </Typography>
      </Stack>
      <Stack direction="row" spacing={4}>
        <Stack spacing={3}>
          <Stack>
            <Link href="/">
              <Typography variant="h6" gutterBottom>
                💻How I code for 8 hours without feeling tired.
              </Typography>
            </Link>
            <Typography
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              🔴 I have coded wrong my whole life. I thought it was okay to just
              sit down at my desk, open my laptop, take a task from my To-Do
              list, and code until I felt tired. But in reality, this style of
              work always killed my productivity...
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Stack direction="row" spacing={2} flexGrow={1}>
              <Chip label="Coding" />
              <Chip label="Work" />
            </Stack>
            <Stack>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Box
          src="https://media.istockphoto.com/id/1130480436/photo/young-man-talking-on-the-phone-in-his-home-office.jpg?s=612x612&w=0&k=20&c=TvlGfaXVf73TccSnDd3UBviXv5hvsna9XZs0vzDIpQM="
          alt=""
          component="img"
          sx={{
            maxWidth: 136,
            aspectRatio: 1 / 1,
            height: 1,
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
      </Stack>
    </div>
  );
}

export default ArticleCard;
