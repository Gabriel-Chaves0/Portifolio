import { createTheme, responsiveFontSizes } from "@mui/material";
import { purple } from "@mui/material/colors";


let theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#494C4',
    },
  },

  typography: {
    fontFamily: "Roboto",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
 