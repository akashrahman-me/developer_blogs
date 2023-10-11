"use client";
import React, {Fragment} from "react";
import Divider from "@mui/material/Divider";
import YouTopic from "./home/YouTopic";
import RelevenUsers from "./home/RelevenUsers";
import Recommendation from "./home/aside/Recommendation";
import Trending from "./home/aside/Trending";
import ArticleManager from "./home/ArticleManager";
import Layout from "@/components/global/Layout";

function HomePage() {
  return (
    <Layout
      aside={
        <Fragment>
          <Trending />
          <Divider sx={{marginY: 3}} />
          <Recommendation />
        </Fragment>
      }
    >
      <YouTopic />
      <RelevenUsers />
      <ArticleManager />
    </Layout>
  );
}

export default HomePage;
