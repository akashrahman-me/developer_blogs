"use client";
import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SimpleBar from "simplebar-react";
import Link from "next/link";
import Image from "next/image";
import {navbar, wrapper} from "./styles";
import Pages from "./Pages";

function Navigation() {
  return (
    <Box
      sx={{
        flex: `0 0 100px`,
        borderRight: 1,
        borderColor: "divider",
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      <SimpleBar style={{maxHeight: "100vh"}}>
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
          <Box sx={{paddingBottom: 5}}>
            <Link href="/profile">
              <Avatar src="/images/demo/image 3.png" />
            </Link>
          </Box>
        </Box>
      </SimpleBar>{" "}
    </Box>
  );
}

export default Navigation;
