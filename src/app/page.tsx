"use client";
import React, {Fragment} from "react";
import Divider from "@mui/material/Divider";
import YouTopic from "./home/YouTopic";
import RelevenUsers from "./home/RelevenUsers";
import Recommendation from "../components/global/aside/Recommendation";
import Trending from "../components/global/aside/Trending";
import ArticleManager, {type ArticleManagerProps} from "./home/ArticleManager";
import Layout from "@/components/global/Layout";
import articles from "@/data/articles.json";

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
      <ArticleManager tabs={articles} />
    </Layout>
  );
}

export default HomePage;
