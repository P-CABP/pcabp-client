import { createTheme } from "@mui/material";

const typographyTheme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        size: "16bs",
        weight: "regular",
      },
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
        },
      },
      variants: [
        {
          props: {
            size: "48xl",
          },
          style: {
            fontSize: "48px",
          },
        },
        {
          props: {
            size: "36xl",
          },
          style: {
            fontSize: "36px",
          },
        },
        {
          props: {
            size: "30xl",
          },
          style: {
            fontSize: "30px",
          },
        },
        {
          props: {
            size: "24xl",
          },
          style: {
            fontSize: "24px",
          },
        },
        {
          props: {
            size: "20xl",
          },
          style: {
            fontSize: "20px",
          },
        },
        {
          props: {
            size: "18lg",
          },
          style: {
            fontSize: "18px",
          },
        },
        {
          props: {
            size: "16bs",
          },
          style: {
            fontSize: "16px",
          },
        },
        {
          props: {
            size: "14sm",
          },
          style: {
            fontSize: "14px",
          },
        },
        {
          props: {
            size: "12xs",
          },
          style: {
            fontSize: "12px",
          },
        },
        {
          props: {
            weight: "bold",
          },
          style: {
            fontWeight: "900",
          },
        },
        {
          props: {
            weight: "semi-bold",
          },
          style: {
            fontWeight: "600",
          },
        },
        {
          props: {
            weight: "regular",
          },
          style: {
            fontWeight: "400",
          },
        },
      ],
    },
  },
});

export default typographyTheme;
