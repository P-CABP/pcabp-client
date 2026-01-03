import { createTheme } from "@mui/material";

import buttonTheme from "@/themes/button-theme";
import dialogTheme from "@/themes/dialog-theme";
import iconButtonTheme from "@/themes/icon-button-theme";
import paletteTheme from "@/themes/palette-theme";
import snackbarTheme from "@/themes/snackbar-theme";
import textFieldTheme from "@/themes/text-field-theme";
import typographyTheme from "@/themes/typography-theme";

const theme = createTheme(
  {},
  buttonTheme,
  dialogTheme,
  iconButtonTheme,
  paletteTheme,
  snackbarTheme,
  textFieldTheme,
  typographyTheme,
);

export default theme;
