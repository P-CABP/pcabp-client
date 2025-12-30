import { Stack, styled } from "@mui/material";

import Navigation from "@/components/layouts/Navigation";
import TitleBar from "@/components/layouts/TitleBar";
import UtilityBar from "@/components/layouts/UtilityBar";

const Header = () => {
  return (
    <StyledHeader className="header">
      <TitleBar />
      <UtilityBar />
      <Navigation />
    </StyledHeader>
  );
};

const StyledHeader = styled(Stack)`
  width: 100%;
  min-width: 960px;

  padding: 0 160px;
`;

export default Header;
