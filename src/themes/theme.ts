import { createTheme } from "@mui/material";

import buttonTheme from "@/themes/button-theme";
import paletteTheme from "@/themes/palette-theme";
import typographyTheme from "@/themes/typography-theme";

const theme = createTheme({}, buttonTheme, paletteTheme, typographyTheme);

export default theme;
