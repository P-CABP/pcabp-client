import { Stack, styled, Typography, useTheme } from "@mui/material";

import Flex from "@/components/wrappers/Flex";
import ColorPalette from "@/pages/dev/palette/_components/ColorPalette";

const DevPalettePage = () => {
  const theme = useTheme();

  return (
    <Stack rowGap={3}>
      <StyledPaletteContainer>
        <Typography>Main Palette</Typography>
        <StyledColorPaletteContainer>
          <ColorPalette title="primary" color={theme.palette.main.primary} />
          <ColorPalette
            title="secondary"
            color={theme.palette.main.secondary}
          />
        </StyledColorPaletteContainer>
      </StyledPaletteContainer>
      <StyledPaletteContainer>
        <Typography>Grayscale Palette</Typography>
        <StyledColorPaletteContainer>
          <ColorPalette title="black" color={theme.palette.grayscale.black} />
          <ColorPalette
            title="gray100_1A"
            color={theme.palette.grayscale.gray100_1A}
          />
          <ColorPalette
            title="gray200_33"
            color={theme.palette.grayscale.gray200_33}
          />
          <ColorPalette
            title="gray300_4D"
            color={theme.palette.grayscale.gray300_4D}
          />
          <ColorPalette
            title="gray400_66"
            color={theme.palette.grayscale.gray400_66}
          />
          <ColorPalette
            title="gray500_85"
            color={theme.palette.grayscale.gray500_85}
          />
          <ColorPalette
            title="gray600_A3"
            color={theme.palette.grayscale.gray600_A3}
          />
          <ColorPalette
            title="gray700_C2"
            color={theme.palette.grayscale.gray700_C2}
          />
          <ColorPalette
            title="gray800_E0"
            color={theme.palette.grayscale.gray800_E0}
          />
          <ColorPalette
            title="gray900_F5"
            color={theme.palette.grayscale.gray900_F5}
          />
          <ColorPalette title="white" color={theme.palette.grayscale.white} />
        </StyledColorPaletteContainer>
      </StyledPaletteContainer>
      <StyledPaletteContainer>
        <Typography>Semantic Palette</Typography>
        <StyledColorPaletteContainer>
          <ColorPalette
            title="success"
            color={theme.palette.semantic.success}
          />
          <ColorPalette
            title="warning"
            color={theme.palette.semantic.warning}
          />
          <ColorPalette title="error" color={theme.palette.semantic.error} />
        </StyledColorPaletteContainer>
      </StyledPaletteContainer>
    </Stack>
  );
};

const StyledPaletteContainer = styled(Stack)`
  row-gap: 8px;
`;

const StyledColorPaletteContainer = styled(Flex)`
  column-gap: 16px;
`;

export default DevPalettePage;
