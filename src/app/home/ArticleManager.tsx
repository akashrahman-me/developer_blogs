/* eslint-disable @next/next/no-img-element */
"use client";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";
import ArticleCard, {ArticleCardProps} from "@/components/common/ArticleCard";
import Typography from "@mui/material/Typography";

export interface ArticleManagerProps {
  tabs: {
    name: string;
    articles: ArticleCardProps[];
  }[];
}

function ArticleManager(props: ArticleManagerProps) {
  const {tabs} = props;
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
        {tabs.map(({name}) => (
          <Tab label={name} key={name} />
        ))}
      </Tabs>
      <Box sx={{paddingY: 4}}>
        {tabs[activeTab].articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
        {tabs[activeTab].articles.length <= 0 && (
          <Stack spacing={4} alignItems="center" marginTop={7} marginBottom={6}>
            <img src="/images/blank.svg" alt="" />
            <Typography
              variant="h6"
              color="gray"
              maxWidth={200}
              textAlign="center"
            >
              You Dont have any articles in Drafts
            </Typography>
          </Stack>
        )}
      </Box>
    </Box>
  );
}

export default ArticleManager;
