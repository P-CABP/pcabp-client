import { TypographyOwnProps as MuiTypographyOwnProps } from "@mui/material";

declare module "@mui/material/Typography" {
  interface TypographyOwnProps extends MuiTypographyOwnProps {
    size?:
      | "48xl"
      | "36xl"
      | "30xl"
      | "24xl"
      | "20xl"
      | "18lg"
      | "16bs"
      | "14sm"
      | "12xs";
    weight?: "bold" | "semi-bold" | "regular";
  }
}
