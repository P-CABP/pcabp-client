import { Stack, styled, Typography } from "@mui/material";
import { NavLink } from "react-router";

import Flex from "@/components/wrappers/Flex";

const MENU_ITEM_MOCK = [
  {
    name: "홈",
    path: "/",
  },
  {
    name: "배송조회",
    path: "/delivery-lookup",
  },
  {
    name: "주문조회",
    path: "/order-lookup",
  },
  {
    name: "취소조회",
    path: "/cancel-lookup",
  },
  {
    name: "반품조회",
    path: "/return-lookup",
  },
  {
    name: "교환조회",
    path: "/exchange-lookup",
  },
  {
    name: "환불조회",
    path: "/refund-lookup",
  },
];

const Navigation = () => {
  return (
    <StyledNavigation className="navigation">
      <StyledNavigationGroup>
        {MENU_ITEM_MOCK.map((item) => (
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
