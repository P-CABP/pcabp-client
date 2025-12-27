import { Stack, styled, Typography } from "@mui/material";

import Flex from "@/components/wrappers/Flex";

const DevTypographyPage = () => {
  return (
    <Stack rowGap={2}>
      <StyledTypographyContainer>
        <Typography size="30xl" weight="bold">
          Size
        </Typography>
        <Flex columnGap={2}>
          <Typography size="48xl">48xl</Typography>
          <Typography size="36xl">36xl</Typography>
          <Typography size="30xl">30xl</Typography>
          <Typography size="24xl">24xl</Typography>
          <Typography size="20xl">20xl</Typography>
          <Typography size="18lg">18lg</Typography>
          <Typography size="16bs">16bs</Typography>
          <Typography size="14sm">14sm</Typography>
          <Typography size="12xs">12xs</Typography>
        </Flex>
      </StyledTypographyContainer>
      <StyledTypographyContainer>
        <Typography size="30xl" weight="bold">
          Weight
        </Typography>
        <Flex columnGap={2}>
          <Typography weight="bold">bold</Typography>
          <Typography weight="semi-bold">semi-bold</Typography>
          <Typography weight="regular">regular</Typography>
        </Flex>
      </StyledTypographyContainer>
    </Stack>
  );
};

const StyledTypographyContainer = styled(Stack)`
  row-gap: 8px;
`;

export default DevTypographyPage;
