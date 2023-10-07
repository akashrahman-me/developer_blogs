import React, {Fragment} from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import {usePathname} from "next/navigation";
import Box from "@mui/material/Box";
import pages from "./pages.json";
import Link from "next/link";
import pagesIcons from "./icons";

function Pages() {
  const pathname = usePathname();

  return (
    <Fragment>
      {pages.map((group, index) => (
        <Fragment key={group.id}>
          <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
            {group.items.map(({id, name, href, icon}) => {
              const current = href === pathname;
              const CI = icon[current ? 0 : 1] as keyof typeof pagesIcons;
              const Icon = pagesIcons[CI];

              return (
                <IconButton
                  href={href}
                  title={name}
                  LinkComponent={Link}
                  key={id}
                >
                  <Icon
                    sx={{
                      fontSize: 32,
                      color: current
                        ? "primary.main"
                        : (theme) => theme.palette.grey[800],
                    }}
                  />
                </IconButton>
              );
            })}
          </Box>
          {index + 1 !== pages.length && <Divider sx={{marginY: 3}} />}
        </Fragment>
      ))}
    </Fragment>
  );
}

export default Pages;
