import {createTheme} from "@mui/material/styles";

const mono = createTheme({
  palette: {
    primary: {
      main: "#00A2DD",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: 500,
        },
      },
    },
  },
  typography: {
    fontFamily: ["Open Sans", '"Helvetica Neue"', "Arial", "sans-serif"].join(
      ","
    ),
  },
});

export default mono;
