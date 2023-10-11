"use client";
import React from "react";
import Layout from "@/components/global/Layout";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "next/link";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const iconRegister = {
  FacebookRoundedIcon,
  InstagramIcon,
  TwitterIcon,
  EmailRoundedIcon,
};

const socials = [
  {
    icon: "FacebookRoundedIcon",
    link: "https://www.facebook.com/akash.rahman.007",
  },
  {
    icon: "InstagramIcon",
    link: "https://www.instagram.com/akash_rahman/",
  },
  {
    icon: "TwitterIcon",
    link: "https://twitter.com/akash_rahman",
  },
  {
    icon: "EmailRoundedIcon",
    link: "mailto:3o1g4@example.com",
  },
];

function ProfileCard() {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/72343360?v=4"
        sx={{width: 120, height: 120, marginBottom: 2.5}}
      />
      <Typography
        textTransform="uppercase"
        variant="h6"
        fontWeight="600"
        marginBottom={1}
      >
        Akash Rahman
      </Typography>
      <Typography
        textAlign="center"
        maxWidth="60%"
        marginBottom={2}
        lineHeight={1.3}
      >
        Software Enginnering Student at INPT
      </Typography>
      <Stack direction="row" spacing={2} marginBottom={4}>
        <Typography fontWeight="600" variant="body2">
          1 Articles
        </Typography>
        <Typography fontWeight="600" variant="body2">
          88 Followers
        </Typography>
        <Typography fontWeight="600" variant="body2">
          200 Following
        </Typography>
      </Stack>
      <Button sx={{textTransform: "capitalize"}}>Edite Profile</Button>
      <Divider sx={{marginY: 5, width: 1}} />
      <Stack direction="row" spacing={4} alignItems="center">
        {socials.map(({icon, link}) => {
          const IconComp = iconRegister[icon as keyof typeof iconRegister];

          return (
            <Link key={link} href="https://facebook.com/akashrahman.me">
              <IconComp sx={{width: 32, height: 32, color: "#253655"}} />
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
}

export default ProfileCard;
