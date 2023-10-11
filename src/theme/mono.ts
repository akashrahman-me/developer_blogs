import {createTheme} from "@mui/material/styles";

const mono = createTheme({
  palette: {
    primary: {
      main: "#00A2DD",
      contrastText: "#FFFFFF",
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
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          padding: "10px 28px",
        },
        root: {
          textTransform: "capitalize",
          boxShadow: "none",
          borderRadius: 999,
          "&:hover": {
            boxShadow: "none",
          },
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
