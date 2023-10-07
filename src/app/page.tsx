import Navigation from "@/components/global/navigation/Navigation";
import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

const users = [
  {
    id: 4345,
    name: "John Doe",
    image: "/images/demo/image 4.png",
    url: "/john_doe",
  },
];

function HomePage() {
  return (
    <div>
      <Box sx={{display: "flex"}}>
        <Box sx={{flex: `0 0 100px`}}>
          <Navigation />
        </Box>
        <Box sx={{paddingY: 5}}>
          <Box sx={{display: "flex", gap: 2}}>
            {users.map(({id, name, image, url}) => (
              <Link href="/" key={id}>
                <Avatar src={image} alt={name} key={id} />
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default HomePage;
