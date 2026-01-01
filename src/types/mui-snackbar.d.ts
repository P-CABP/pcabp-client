import { SnackbarProps as MuiSnackbarProps } from "@mui/material";

import { MessageType } from "@/stores/system-toast-store";

declare module "@mui/material/Snackbar" {
  interface SnackbarProps extends MuiSnackbarProps {
    type?: MessageType;
  }
}
