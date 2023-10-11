"use client";
import React from "react";
import monoTheme from "@/theme/mono";
import Box from "@mui/material/Box";
import SimpleBar from "simplebar-react";

import {ThemeProvider} from "@mui/material/styles";

// @fontsource/roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navigation from "./navigation/Navigation";
import Aside from "@/components/global/aside/Aside";

interface LayoutProps {
  children?: React.ReactNode;
  aside: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const {children, aside} = props;

  return (
    <ThemeProvider theme={monoTheme}>
      <SimpleBar style={{maxHeight: "100vh"}}>
        <Box sx={{display: "flex", maxWidth: 1200, marginX: "auto"}}>
          <Navigation />
          <Box sx={{paddingY: 5, paddingX: 4, flex: 1}}>{children}</Box>
          <Aside>{aside}</Aside>
        </Box>
      </SimpleBar>
    </ThemeProvider>
  );
}

export default Layout;
