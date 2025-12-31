import { createTheme } from "@mui/material";

const textFieldTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: "100%",

          "& .MuiInputBase-root": {
            width: "100%",
            height: "32px",

            "& .MuiInputBase-input": {
              padding: "0 12px",
            },

            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${theme.palette.main.primary}`,
            },

            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: 2,
              },
            },

            "&.Mui-disabled": {
              backgroundColor: theme.palette.grayscale.gray800_E0,

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.grayscale.gray500_85,
              },
            },

            "&.Mui-error": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.semantic.error,
              },
            },
          },
        }),
      },
    },
  },
});

export default textFieldTheme;
