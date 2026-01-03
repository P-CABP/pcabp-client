import { createTheme } from "@mui/material";

const dialogTheme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        root: {},
        container: {},
        paper: {
          maxWidth: "100%",

          margin: "0",
          padding: "0 20px",
          paddingBottom: "20px",

          borderRadius: "8px",

          boxShadow: "none",

          variants: [
            {
              props: {
                size: "small",
              },
              style: {
                width: "400px",
              },
            },
            {
              props: {
                size: "medium",
              },
              style: {
                width: "800px",
              },
            },
            {
              props: {
                size: "large",
              },
              style: {
                width: "1200px",
              },
            },
          ],
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          height: "50px",

          padding: "0",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "20px 0",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          height: "32px",

          padding: "0 20px",
        },
      },
    },
  },
});

export default dialogTheme;
