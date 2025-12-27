import { Stack, styled } from "@mui/material";
import { Outlet } from "react-router";

const DevLayout = () => {
  return (
    <StyledDevLayout className="dev-layout">
      <Outlet />
    </StyledDevLayout>
  );
};

const StyledDevLayout = styled(Stack)`
  width: 100%;
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export default DevLayout;
