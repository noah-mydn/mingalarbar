import { createTheme } from "@mui/material";

/* CSS HEX */
let color_one = "#565F68ff";
let color_two = "#18191Bff";
let color_three = "#FDFBE8ff";
let color_four = "#E2D279ff";
let color_five = "#FFFAA3ff";
const theme = createTheme({
  palette: {
    primary: {
      main: color_one,
    },
    secondary: {
      main: color_two,
    },
    tertiary: {
      main: color_three,
    },
    text: {
      main: color_four,
    },
    info: {
      main: color_five,
    },
  },

  typography: {
    fontFamily: ["Philosopher", "Jost", "sans-serif"].join(","),
    fontSize: 16,
  },
});

export default theme;
