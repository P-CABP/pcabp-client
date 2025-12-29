import { Box, Button, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import TitleLogoIcon from "@/components/icons/TitleLogoIcon";
import Flex from "@/components/wrappers/Flex";

const UtilityBar = () => {
  const { t } = useTranslation();

  return (
    <StyledUtilityBar className="utility-bar">
      <StyledLogoIcon>
        <TitleLogoIcon />
      </StyledLogoIcon>
      <Flex alignItems="center">
        <Button size="small">
          <Typography size="12xs">{t("common.label.action.LOGIN")}</Typography>
        </Button>
      </Flex>
    </StyledUtilityBar>
  );
};

const StyledUtilityBar = styled(Flex)`
  width: 100%;
  height: 40px;

  justify-content: space-between;
  align-items: center;
`;

const StyledLogoIcon = styled(Box)`
  cursor: pointer;
`;

export default UtilityBar;
