import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import SimpleBar from "simplebar-react";

interface AsideProps {
  children?: React.ReactNode;
}

function Aside(props: AsideProps) {
  const {children} = props;

  return (
    <div>
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
          <Box sx={{width: 300, paddingY: 5}}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  "& input": {
                    paddingY: 1.5,
                  },
                  "& fieldset": {
                    borderRadius: 999,
                  },
                },
              }}
              sx={{marginBottom: 4}}
            />
            {children}
          </Box>
        </SimpleBar>
      </Box>
    </div>
  );
}

export default Aside;
