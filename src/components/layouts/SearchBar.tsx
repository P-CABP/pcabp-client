import { styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import MainSearchBox from "@/components/forms/MainSearchBox";
import LogoIcon from "@/components/icons/LogoIcon";
import Flex from "@/components/wrappers/Flex";
import { useMode } from "@/stores/mode-store";

const SearchBar = () => {
  const { t } = useTranslation();

  const mode = useMode();

  const title = {
    ADMIN: t("common.label.title.ADMIN"),
    FRANCHISE: t("common.label.title.FRANCHISE"),
    STORE: t("common.label.title.STORE"),
    DEVELOP: t("common.label.title.DEVELOP"),
  };

  return (
    <StyledSearchBar>
      <Flex columnGap={5}>
        <Flex columnGap={1} alignItems="center">
          <LogoIcon />
          <StyledTitle size="20xl" weight="bold">
            {title[mode]}
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
