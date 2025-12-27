import { createTheme } from "@mui/material";

import { GRAYSCALE, MAIN, SEMANTIC } from "@/constants/PALETTE";

const paletteTheme = createTheme({
  palette: {
    main: MAIN,
    grayscale: GRAYSCALE,
    semantic: SEMANTIC,
  },
});

export default paletteTheme;
