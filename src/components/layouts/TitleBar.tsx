import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, IconButton, styled } from "@mui/material";

import TitleLogoIcon from "@/components/icons/TitleLogoIcon";
import Flex from "@/components/wrappers/Flex";

const TitleBar = () => {
  return (
    <StyledUtilityBar className="utility-bar">
      <StyledLogoIcon>
        <TitleLogoIcon />
      </StyledLogoIcon>
      <IconButton size="small">
        <SettingsOutlinedIcon fontSize="small" />
      </IconButton>
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

export default TitleBar;
