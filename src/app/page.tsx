/* eslint-disable @next/next/no-img-element */
"use client";
import Navigation from "@/components/global/navigation/Navigation";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArticleCard from "@/components/common/ArticleCard";

const tabs = ["Following", "Recommended"];

function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Box sx={{display: "flex"}}>
        <Box sx={{flex: `0 0 100px`, borderRight: 1, borderColor: "divider"}}>
          <Navigation />
        </Box>
        <Box sx={{paddingY: 5, paddingX: 4}}>
          <Box
            aria-label="Topics"
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <Typography
              variant="body2"
              color="gray"
              fontWeight="600"
              textTransform="uppercase"
            >
              your topics
            </Typography>
            <Box sx={{display: "flex", gap: 2}}>
              {["Gaming", "Android Development", "Freelancing"].map(
                (_, index) => (
                  <Chip key={index} label={_} />
                )
              )}
            </Box>
          </Box>
          <Box
            aria-label="User profiles"
            sx={{display: "flex", gap: 3, marginBottom: 4}}
          >
            {[...Array(6)].map((_, index) => (
              <Link href="/" key={index}>
                <Avatar
                  sx={{width: 64, height: 64}}
                  src="/images/demo/image 4.png"
                  alt=""
                />
              </Link>
            ))}
          </Box>
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
                <ArticleCard />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default HomePage;
