import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
