import { styled, Typography } from "@mui/material";

import MainSearchBox from "@/components/forms/MainSearchBox";
import LogoIcon from "@/components/icons/LogoIcon";
import Flex from "@/components/wrappers/Flex";

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Flex columnGap={5}>
        <Flex columnGap={0.5} alignItems="center">
          <LogoIcon />
          <StyledTitle size="20xl" weight="bold">
            팝업
          </StyledTitle>
        </Flex>
        <MainSearchBox />
      </Flex>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled(Flex)`
  width: 100%;
  height: 60px;

  align-items: center;
`;

const StyledTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.main.primary};
`;

export default SearchBar;
