import { Box, styled } from "@mui/material";
import { Outlet } from "react-router";

const GlobalLayout = () => {
  return (
    <StyledGlobalLayout className="global-layout">
      <Outlet />
    </StyledGlobalLayout>
  );
};

const StyledGlobalLayout = styled(Box)`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ theme }) => theme.palette.grayscale.white};
`;

export default GlobalLayout;
