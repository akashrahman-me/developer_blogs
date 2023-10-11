"use client";
import React from "react";
import Layout from "@/components/global/Layout";
import ProfileCard from "./ProfileCard";

function ProfilePage() {
  return <Layout aside={<ProfileCard />}></Layout>;
}

export default ProfilePage;
