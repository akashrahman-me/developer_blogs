"use client";
import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import Image from "next/image";
import {navbar, wrapper} from "./styles";
import Pages from "./Pages";

function Navigation() {
  return (
    <Box sx={navbar}>
      <Box sx={wrapper}>
        <Box>
          <Link href="/">
            <Image
              src="/images/favicon.svg"
              alt="LOGO"
              width={54}
              height={33}
            />
          </Link>
        </Box>
        <Box>
          <Pages />
        </Box>
      </Box>
      <Box>
        <Link href="/profile">
          <Avatar src="/images/demo/image 3.png" />
        </Link>
      </Box>
    </Box>
  );
}

export default Navigation;
