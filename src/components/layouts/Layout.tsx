import { Box, styled } from "@mui/material";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <StyledLayout className="layout">
      <Outlet />
    </StyledLayout>
  );
};

const StyledLayout = styled(Box)`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default Layout;
