import "./globals.css";
import Head from "next/head";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Developer Blogs",
  description:
    "A developer blogs for developers, who want to learn and share their knowledge.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
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
