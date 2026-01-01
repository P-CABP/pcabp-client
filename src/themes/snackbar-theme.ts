import { createTheme } from "@mui/material";

const snackbarTheme = createTheme({
  components: {
    MuiSnackbar: {
      defaultProps: {
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      },
      styleOverrides: {
        root: {
          "& .MuiPaper-root": {
            borderRadius: "8px",
          },
        },
      },
      variants: [
        {
          props: {
            type: "info",
          },
          style: ({ theme }) => ({
            "& .MuiPaper-root": {
              backgroundColor: theme.palette.main.primary,
            },
          }),
        },
        {
          props: {
            type: "success",
          },
          style: ({ theme }) => ({
            "& .MuiPaper-root": {
              backgroundColor: theme.palette.semantic.success,
            },
          }),
        },
        {
          props: {
            type: "error",
          },
          style: ({ theme }) => ({
            "& .MuiPaper-root": {
              backgroundColor: theme.palette.semantic.error,
            },
          }),
        },
      ],
    },
  },
});

export default snackbarTheme;
