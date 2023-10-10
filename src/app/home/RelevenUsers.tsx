import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Link from "next/link";

function RelevenUsers() {
  return (
    <div>
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
    </div>
  );
}

export default RelevenUsers;
