import "@mui/material/styles";

import { GRAYSCALE, MAIN, SEMANTIC } from "@/constants/PALETTE";

declare module "@mui/material/styles" {
  interface Palette {
    main: MainPalette;
    grayscale: GrayscalePalette;
    semantic: SemanticPalette;
  }

  interface PaletteOptions {
    main?: MainPalette;
    grayscale?: GrayscalePalette;
    semantic?: SemanticPalette;
  }
}

type MainPalette = typeof MAIN;

type GrayscalePalette = typeof GRAYSCALE;

type SemanticPalette = typeof SEMANTIC;
