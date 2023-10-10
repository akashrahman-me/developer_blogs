import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {textEllipsis} from "@/styles/globals";

interface ArticleCardProps {
  meta: {
    profile: string;
    name: string;
    date: string;
  };
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  link: string;
}

function ArticleCard(props: ArticleCardProps) {
  const {meta, title, description, tags, thumbnail, link} = props;

  return (
    <div className="article-card">
      <Stack
        sx={{marginBottom: 1.5}}
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Avatar src={meta.profile} sx={{width: 28, height: 28}} />
          <Typography>{meta.name}</Typography>
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
          {meta.date}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={4}>
        <Stack spacing={3}>
          <Stack>
            <Link href={link}>
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
            </Link>
            <Typography
              sx={{
                ...textEllipsis,
                WebkitLineClamp: 4,
              }}
            >
              {description}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Stack direction="row" spacing={2} flexGrow={1}>
              {tags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </Stack>
            <Stack>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Link
          href={link}
          style={{
            maxWidth: 136,
            width: "100%",
            aspectRatio: 1 / 1,
            height: "100%",
          }}
        >
          <Box
            src={thumbnail}
            alt=""
            component="img"
            sx={{
              objectFit: "cover",
              borderRadius: 2,
              width: "100%",
              height: "100%",
            }}
          />
        </Link>
      </Stack>
      <Divider sx={{marginY: 3}} />
    </div>
  );
}

export default ArticleCard;
