import { Stack, styled } from "@mui/material";

import Navigation from "@/components/layouts/Navigation";
import SearchBar from "@/components/layouts/SearchBar";
import UtilityBar from "@/components/layouts/UtilityBar";

const Header = () => {
  return (
    <StyledHeader className="header">
      <UtilityBar />
      <SearchBar />
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
