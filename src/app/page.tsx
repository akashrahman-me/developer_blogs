"use client";
import React, {Fragment} from "react";
import Divider from "@mui/material/Divider";
import YouTopic from "./home/YouTopic";
import RelevenUsers from "./home/RelevenUsers";
import Recommendation from "./home/aside/Recommendation";
import Trending from "./home/aside/Trending";
import ArticleManager, {type ArticleManagerProps} from "./home/ArticleManager";
import Layout from "@/components/global/Layout";

const articles: ArticleManagerProps["tabs"] = [
  {
    name: "Following",
    articles: [
      {
        meta: {
          profile: "/images/demo/image 3.png",
          name: "Amira Daifi",
          date: "Jan 16",
        },
        title: "How I code for 8 hours without feeling tired.",
        thumbnail:
          "https://media.istockphoto.com/id/1130480436/photo/young-man-talking-on-the-phone-in-his-home-office.jpg?s=612x612&w=0&k=20&c=TvlGfaXVf73TccSnDd3UBviXv5hvsna9XZs0vzDIpQM=",
        description:
          "I have coded wrong my whole life. I thought it was okay to just sit down at my desk, open my laptop, take a task from my To-Do list, and code until I felt tired. But in reality, this style of work always killed my productivity",
        tags: ["Coding", "Android"],
        link: "/",
      },
      {
        meta: {
          profile: "/images/demo/image 3.png",
          name: "Amira Daifi",
          date: "Jan 16",
        },
        title: "How I code for 8 hours without feeling tired.",
        thumbnail:
          "https://media.istockphoto.com/id/1130480436/photo/young-man-talking-on-the-phone-in-his-home-office.jpg?s=612x612&w=0&k=20&c=TvlGfaXVf73TccSnDd3UBviXv5hvsna9XZs0vzDIpQM=",
        description:
          "I have coded wrong my whole life. I thought it was okay to just sit down at my desk, open my laptop, take a task from my To-Do list, and code until I felt tired. But in reality, this style of work always killed my productivity",
        tags: ["Coding", "Android"],
        link: "/",
      },
    ],
  },
  {
    name: "Recommended",
    articles: [
      {
        meta: {
          profile: "/images/demo/image 3.png",
          name: "Amira Daifi",
          date: "Jan 16",
        },
        title: "How I code for 8 hours without feeling tired.",
        thumbnail:
          "https://media.istockphoto.com/id/1130480436/photo/young-man-talking-on-the-phone-in-his-home-office.jpg?s=612x612&w=0&k=20&c=TvlGfaXVf73TccSnDd3UBviXv5hvsna9XZs0vzDIpQM=",
        description:
          "I have coded wrong my whole life. I thought it was okay to just sit down at my desk, open my laptop, take a task from my To-Do list, and code until I felt tired. But in reality, this style of work always killed my productivity",
        tags: ["Coding", "Android"],
        link: "/",
      },
      {
        meta: {
          profile: "/images/demo/image 3.png",
          name: "Amira Daifi",
          date: "Jan 16",
        },
        title: "How I code for 8 hours without feeling tired.",
        thumbnail:
          "https://media.istockphoto.com/id/1130480436/photo/young-man-talking-on-the-phone-in-his-home-office.jpg?s=612x612&w=0&k=20&c=TvlGfaXVf73TccSnDd3UBviXv5hvsna9XZs0vzDIpQM=",
        description:
          "I have coded wrong my whole life. I thought it was okay to just sit down at my desk, open my laptop, take a task from my To-Do list, and code until I felt tired. But in reality, this style of work always killed my productivity",
        tags: ["Coding", "Android"],
        link: "/",
      },
      {
        meta: {
          profile: "/images/demo/image 3.png",
          name: "Amira Daifi",
          date: "Jan 16",
        },
        title: "How I code for 8 hours without feeling tired.",
        thumbnail:
          "https://media.istockphoto.com/id/1130480436/photo/young-man-talking-on-the-phone-in-his-home-office.jpg?s=612x612&w=0&k=20&c=TvlGfaXVf73TccSnDd3UBviXv5hvsna9XZs0vzDIpQM=",
        description:
          "I have coded wrong my whole life. I thought it was okay to just sit down at my desk, open my laptop, take a task from my To-Do list, and code until I felt tired. But in reality, this style of work always killed my productivity",
        tags: ["Coding", "Android"],
        link: "/",
      },
      {
        meta: {
          profile: "/images/demo/image 3.png",
          name: "Amira Daifi",
          date: "Jan 16",
        },
        title: "How I code for 8 hours without feeling tired.",
        thumbnail:
          "https://media.istockphoto.com/id/1130480436/photo/young-man-talking-on-the-phone-in-his-home-office.jpg?s=612x612&w=0&k=20&c=TvlGfaXVf73TccSnDd3UBviXv5hvsna9XZs0vzDIpQM=",
        description:
          "I have coded wrong my whole life. I thought it was okay to just sit down at my desk, open my laptop, take a task from my To-Do list, and code until I felt tired. But in reality, this style of work always killed my productivity",
        tags: ["Coding", "Android"],
        link: "/",
      },
    ],
  },
];

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
