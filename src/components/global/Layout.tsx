"use client";
import React from "react";
import monoTheme from "@/theme/mono";
import {ThemeProvider} from "@mui/material/styles";

// @fontsource/roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const {children} = props;

  return (
    <ThemeProvider theme={monoTheme}>
      <div>{children}</div>
    </ThemeProvider>
  );
}

export default Layout;
