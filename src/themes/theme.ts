import { createTheme } from "@mui/material";

import paletteTheme from "@/themes/palette-theme";
import typographyTheme from "@/themes/typography-theme";

const theme = createTheme({}, paletteTheme, typographyTheme);

export default theme;
