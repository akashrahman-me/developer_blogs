/* eslint-disable @next/next/no-img-element */
"use client";
import Navigation from "@/components/global/navigation/Navigation";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArticleCard from "@/components/common/ArticleCard";
import Aside from "./home/aside/Aside";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import YouTopic from "./home/YouTopic";
import RelevenUsers from "./home/RelevenUsers";

const tabs = ["Following", "Recommended"];

function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Box sx={{display: "flex", maxWidth: 1200, marginX: "auto"}}>
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
            <Navigation />
          </SimpleBar>
        </Box>
        <Box sx={{paddingY: 5, paddingX: 4}}>
          <YouTopic />
          <RelevenUsers />
          <Box sx={{outline: 1}}>
            <Tabs
              value={activeTab}
              onChange={handleChange}
              aria-label="Articale preview tabs."
              sx={{}}
            >
              {tabs.map((tab) => (
                <Tab label={tab} key={tab} />
              ))}
            </Tabs>
            {activeTab === 0 && (
              <Box sx={{paddingY: 4}}>
                {[...Array(6)].map((_, index) => (
                  <ArticleCard
                    key={index}
                    thumbnail="https://media.istockphoto.com/id/1130480436/photo/young-man-talking-on-the-phone-in-his-home-office.jpg?s=612x612&w=0&k=20&c=TvlGfaXVf73TccSnDd3UBviXv5hvsna9XZs0vzDIpQM="
                    link="/"
                    meta={{
                      profile: "/images/demo/image 3.png",
                      name: "Amira Daifi",
                      date: "Jan 16",
                    }}
                    title="💻How I code for 8 hours without feeling tired."
                    description="🔴 I have coded wrong my whole life. I thought it was
                  okay to just sit down at my desk, open my laptop, take
                  a task from my To-Do list, and code until I felt
                  tired. But in reality, this style of work always
                  killed my productivity"
                    tags={["Coding", "Android"]}
                  />
                ))}
              </Box>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            paddingX: 4,
            height: "100vh",
            position: "sticky",
            top: 0,
            borderLeft: 1,
            borderColor: "divider",
          }}
        >
          <SimpleBar style={{maxHeight: "100vh"}}>
            <Aside />
          </SimpleBar>
        </Box>
      </Box>
    </div>
  );
}

export default HomePage;
