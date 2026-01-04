import { Box, Divider, styled } from "@mui/material";
import { Outlet } from "react-router";

import Header from "@/components/layouts/Header";

const Layout = () => {
  return (
    <StyledLayout className="layout">
      <Header />
      <StyledDivider />
      <Outlet />
    </StyledLayout>
  );
};

const StyledLayout = styled(Box)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledDivider = styled(Divider)`
  width: 100%;

  margin-bottom: 24px;
`;

export default Layout;
