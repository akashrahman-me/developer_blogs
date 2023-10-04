import React from "react";

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

  return <div>{children}</div>;
}

export default Layout;
