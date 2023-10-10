import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {textEllipsis} from "@/styles/globals";
import Link from "next/link";

function ArticleEllipsis() {
  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar sx={{width: 20, height: 20}} />
        <Typography>Scott Galloway</Typography>
      </Stack>
      <Link href="/">
        <Typography
          variant="h6"
          fontSize="1.1em"
          lineHeight={1.3}
          fontWeight={600}
          sx={{...textEllipsis, WebkitLineClamp: 2}}
          title="The Attention Economy is Making Us Stupid"
        >
          The Attention Economy is Making Us Stupid
        </Typography>
      </Link>
    </Stack>
  );
}

export default ArticleEllipsis;
