import type {Metadata} from "next";
import Layout from "@/components/global/Layout";
import "@/styles/globals.css";
import "simplebar-react/dist/simplebar.min.css";

export const metadata: Metadata = {
  title: "Developer Blogs",
  description:
    "A developer blogs for developers, who want to learn and share their knowledge.",
};

function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon.svg"
          type="image/x-icon"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
