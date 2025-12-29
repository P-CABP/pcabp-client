import { Stack, styled, Typography } from "@mui/material";
import { NavLink } from "react-router";

import Flex from "@/components/wrappers/Flex";
import { NAVIGATION } from "@/constants/NAVIGATION";
import { useMode } from "@/stores/mode-store";

const Navigation = () => {
  const mode = useMode();

  const navigation = NAVIGATION[mode];

  return (
    <StyledNavigation className="navigation">
      <StyledNavigationGroup>
        {navigation.map((item) => (
          <StyledNavigationLink key={item.path} to={item.path}>
            <Typography size="16bs" weight="semi-bold">
              {item.name}
            </Typography>
          </StyledNavigationLink>
        ))}
      </StyledNavigationGroup>
    </StyledNavigation>
  );
};

const StyledNavigation = styled(Stack)`
  width: 100%;
  height: 60px;

  justify-content: center;
`;

const StyledNavigationGroup = styled(Flex)`
  column-gap: 16px;

  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const StyledNavigationLink = styled(NavLink)`
  color: ${({ theme }) => theme.palette.grayscale.black};
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.palette.main.trinary};
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }

  :hover {
    color: ${({ theme }) => theme.palette.main.trinary};
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }
`;

export default Navigation;
