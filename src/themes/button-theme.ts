import { createTheme } from "@mui/material";

const buttonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "fit-content",

          boxShadow: "none",

          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: ({ theme }) => ({
          backgroundColor: theme.palette.main.primary,

          ":hover": {
            backgroundColor: theme.palette.main.trinary,
          },

          ":disabled": {
            color: theme.palette.grayscale.gray700_C2,
            backgroundColor: theme.palette.grayscale.gray800_E0,
          },
        }),
        outlined: ({ theme }) => ({
          color: theme.palette.main.trinary,
          border: `1px solid ${theme.palette.main.primary}`,

          ":hover": {
            color: theme.palette.grayscale.white,
            backgroundColor: theme.palette.main.primary,
          },

          ":disabled": {
            color: theme.palette.grayscale.gray700_C2,
            borderColor: theme.palette.grayscale.gray700_C2,
          },
        }),
        text: ({ theme }) => ({
          color: theme.palette.main.trinary,

          ":hover": {
            color: theme.palette.grayscale.gray100_1A,
            backgroundColor: "transparent",
          },

          ":disabled": {
            color: theme.palette.grayscale.gray700_C2,
          },
        }),
        sizeLarge: {
          height: "40px",

          padding: "0 12px",
        },
        sizeMedium: {
          height: "36px",

          padding: "0 8px",
        },
        sizeSmall: {
          height: "32px",

          padding: "0 8px",
        },
      },
    },
  },
});

export default buttonTheme;
