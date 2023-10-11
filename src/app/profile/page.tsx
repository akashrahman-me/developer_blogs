"use client";
import React from "react";
import Layout from "@/components/global/Layout";
import ProfileCard from "@/components/global/aside/ProfileCard";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArticleManager, {type ArticleManagerProps} from "../home/ArticleManager";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const articles: ArticleManagerProps["tabs"] = [
  {
    name: "Published",
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
    name: "In Review",
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
  {
    name: "Drafts",
    articles: [],
  },
];

function ProfilePage() {
  return (
    <Layout aside={<ProfileCard />}>
      <Typography
        variant="h4"
        fontWeight="600"
        textTransform="uppercase"
        marginBottom={6}
        marginTop={4}
      >
        Akash Rahman
      </Typography>
      <ArticleManager tabs={articles} />
      <Stack alignItems="center">
        <Button
          startIcon={<AddRoundedIcon />}
          sx={{paddingX: 5}}
          size="large"
          variant="contained"
        >
          Write New Article
        </Button>
      </Stack>
    </Layout>
  );
}

export default ProfilePage;
