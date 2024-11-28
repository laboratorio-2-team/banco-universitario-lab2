import { defaultTheme } from "./defaultTheme";
import { Theme, createTheme } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";

export const lightTheme: Theme = createTheme({
  ...defaultTheme,
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: "#FFFFFF",
      },
      defaultProps: {
        color: "default",
        sx: {
          display: "flex",
          height: "auto",
          padding: "1rem 4% .5rem 4%",
        },
      },
    },
  },
  palette: createPalette({
    mode: "light",
    text: {
      primary: "#053436",
      disabled: "rgba(8, 95, 99, 0.05)",
      secondary: "#344767",
    },
    primary: {
      "50": "#085F63",
      "300": "#779C9D",
      main: "#085F63",
      "800": "#053436",
    },
    secondary: {
      "300": "#9DC0BE",
      main: "#49BEB7",
    },

    error: {
      "300": "#FE5C73",
      main: "#F93652",
    },
    success: {
      main: "#0AB087",
    },
    grey: {
      "200": "#9C9C9C",
      "300": "#7B809A",
      "400": "#F5F7FA",
      "500": "#F2F4F7",
      "600": "#FFFFFF",
      "700": "#B1B1B1",
    },
  }),
});
