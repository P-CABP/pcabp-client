import { DialogProps as MuiDialogProps } from "@mui/material";

declare module "@mui/material/Dialog" {
  interface DialogProps extends MuiDialogProps {
    size?: "small" | "medium" | "large";
  }
}
