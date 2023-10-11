"use client";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArticleCard from "@/components/common/ArticleCard";
const tabs = ["Following", "Recommended"];

function ArticleManager() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
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
  );
}

export default ArticleManager;
