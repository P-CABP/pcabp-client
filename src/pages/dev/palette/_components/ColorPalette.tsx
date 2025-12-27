import { Box, Stack, styled, Typography } from "@mui/material";

interface ColorPaletteProps {
  color: string;
  title: string;
}

const ColorPalette = ({ color, title }: ColorPaletteProps) => {
  return (
    <Stack justifyContent="center" alignItems="center" rowGap={1}>
      <StyledColorPalette className="color-palette" color={color} />
      <Stack rowGap={0.5} alignItems="center">
        <Typography>{title}</Typography>
        <Typography>{color}</Typography>
      </Stack>
    </Stack>
  );
};

const StyledColorPalette = styled(Box, {
  shouldForwardProp: (prop) => prop !== "color",
})<{ color: string }>`
  width: 75px;
  height: 75px;

  border-radius: 8px;

  background-color: ${({ color }) => color};
`;

export default ColorPalette;
