import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import IconTextButton from "@/components/buttons/IconTextButton";
import MainSearchBox from "@/components/forms/MainSearchBox";
import LogoIcon from "@/components/icons/LogoIcon";
import AuthenticationActionBar from "@/components/layouts/AuthenticationActionBar";
import SystemActionBar from "@/components/layouts/SystemActionBar";
import Flex from "@/components/wrappers/Flex";
import { Mode, useMode } from "@/stores/mode-store";

const UtilityBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const mode = useMode();

  const title = {
    ADMIN: t("common.label.title.ADMIN"),
    STORE: t("common.label.title.STORE"),
    SHOP: t("common.label.title.SHOP"),
    DEVELOP: t("common.label.title.DEVELOP"),
  };

  const handleModeNavigate = (mode: Mode) => {
    switch (mode) {
      case "ADMIN":
        navigate("/admin");
        break;
      case "STORE":
        navigate("/store");
        break;
      case "SHOP":
        navigate("/");
        break;
      case "DEVELOP":
        navigate("/dev");
        break;
    }
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
        <IconTextButton
          text={t("common.label.title.HOME")}
          size="large"
          onClick={() => handleModeNavigate("SHOP")}
        >
          <HomeOutlinedIcon fontSize="large" />
        </IconTextButton>
        <IconTextButton
          text={t("common.label.title.USER")}
          size="large"
          onClick={() => {}}
        >
          <PersonOutlineOutlinedIcon fontSize="large" />
        </IconTextButton>
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
