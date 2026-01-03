import { styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import MainSearchBox from "@/components/forms/MainSearchBox";
import LogoIcon from "@/components/icons/LogoIcon";
import AuthenticationActionBar from "@/components/layouts/AuthenticationActionBar";
import SystemActionBar from "@/components/layouts/SystemActionBar";
import UserActionBar from "@/components/layouts/UserActionBar";
import Flex from "@/components/wrappers/Flex";
import { useMode } from "@/stores/mode-store";

const UtilityBar = () => {
  const { t } = useTranslation();

  const mode = useMode();

  const title = {
    ADMIN: t("common.label.title.ADMIN"),
    STORE: t("common.label.title.STORE"),
    SHOP: t("common.label.title.SHOP"),
    DEVELOP: t("common.label.title.DEVELOP"),
  };

  return (
    <StyledSearchBar>
      <Flex columnGap={5}>
        <Flex columnGap={1} alignItems="center">
          <LogoIcon />
          <StyledTitle size="20xl" weight="bold" noWrap>
            {title[mode]}
          </StyledTitle>
        </Flex>
        <MainSearchBox />
      </Flex>
      <Flex alignItems="center" columnGap={2}>
        <SystemActionBar />
        <UserActionBar />
        <AuthenticationActionBar />
      </Flex>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled(Flex)`
  width: 100%;
  height: 60px;

  /* margin-top: 24px; */

  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.main.primary};
`;

export default UtilityBar;
