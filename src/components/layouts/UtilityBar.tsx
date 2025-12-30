import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import CodeIcon from "@mui/icons-material/Code";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Divider, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import IconTextButton from "@/components/buttons/IconTextButton";
import MainSearchBox from "@/components/forms/MainSearchBox";
import LogoIcon from "@/components/icons/LogoIcon";
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
        <IconTextButton
          text={t("common.label.title.ADMIN")}
          size="large"
          onClick={() => handleModeNavigate("ADMIN")}
        >
          <AdminPanelSettingsOutlinedIcon fontSize="large" />
        </IconTextButton>
        <IconTextButton
          text={t("common.label.title.STORE")}
          size="large"
          onClick={() => handleModeNavigate("STORE")}
        >
          <StorefrontIcon fontSize="large" />
        </IconTextButton>
        <IconTextButton
          text={t("common.label.title.DEVELOP")}
          size="large"
          onClick={() => handleModeNavigate("DEVELOP")}
        >
          <CodeIcon fontSize="large" />
        </IconTextButton>
        <StyledDivider orientation="vertical" flexItem />
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
        <StyledDivider orientation="vertical" flexItem />
        <IconTextButton
          text={t("common.label.action.LOGIN")}
          size="large"
          onClick={() => {}}
        >
          <LockOpenIcon fontSize="large" />
        </IconTextButton>
        <IconTextButton
          text={t("common.label.action.LOGOUT")}
          size="large"
          onClick={() => {}}
        >
          <LockOutlinedIcon fontSize="large" />
        </IconTextButton>
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

const StyledDivider = styled(Divider)`
  height: 32px;

  align-self: center;

  border-right: 1.5px solid ${({ theme }) => theme.palette.grayscale.gray700_C2};
`;

export default UtilityBar;
