import { createTheme } from "@mui/material";

import buttonTheme from "@/themes/button-theme";
import iconButtonTheme from "@/themes/icon-button-theme";
import paletteTheme from "@/themes/palette-theme";
import textFieldTheme from "@/themes/text-field-theme";
import typographyTheme from "@/themes/typography-theme";

const theme = createTheme(
  {},
  buttonTheme,
  iconButtonTheme,
  paletteTheme,
  textFieldTheme,
  typographyTheme,
);

export default theme;
