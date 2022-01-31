import { red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    htmlFontSize: 10,
    fontWeightBold: 600,
  },
  palette: {
    primary: {
      main: "#e3364e",
    },
    secondary: {
      main: "#535766",
    },
    info: {
      main: "#535766",
    },
    error: {
      main: red.A400,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
