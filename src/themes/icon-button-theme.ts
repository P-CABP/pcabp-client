import { createTheme } from "@mui/material";

const iconButtonTheme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        sizeLarge: {
          width: "35px",
          height: "35px",
        },
        sizeMedium: {
          width: "24px",
          height: "24px",
        },
        sizeSmall: {
          width: "20px",
          height: "20px",
        },
      },
    },
  },
});

export default iconButtonTheme;
