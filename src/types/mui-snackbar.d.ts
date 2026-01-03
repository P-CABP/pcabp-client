import { SnackbarProps as MuiSnackbarProps } from "@mui/material";

import { SystemToastMessageType } from "@/stores/system-toast-store";

declare module "@mui/material/Snackbar" {
  interface SnackbarProps extends MuiSnackbarProps {
    type?: SystemToastMessageType;
  }
}
