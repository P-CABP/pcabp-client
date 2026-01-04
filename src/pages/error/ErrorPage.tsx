import { ErrorOutlineOutlined } from "@mui/icons-material";
import { Button, Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useRouteError } from "react-router";

import Conditional from "@/components/wrappers/Conditional";
import Flex from "@/components/wrappers/Flex";
import useError from "@/hooks/useError";
import useSession from "@/hooks/useSession";
import SessionService from "@/services/session-service";

const ErrorPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const error = useRouteError();
  const { errorMessage, isAuthorityError } = useError(error);

  const { data: session } = SessionService.useSession();
  const { isAuthenticated } = useSession(session);

  const handleHomeNavigate = () => {
    navigate("/");
  };

  const handleLoginNavigate = () => {
    navigate("/login");
  };

  return (
    <StyledErrorPage>
      <StyledErrorIcon />
      <Typography size="36xl" weight="semi-bold">
        {errorMessage}
      </Typography>
      <StyledActionButtons>
        <Button variant="contained" size="large" onClick={handleHomeNavigate}>
          {t("common.label.title.HOME")}
        </Button>
        <Conditional active={isAuthorityError && !isAuthenticated}>
          <Button
            variant="contained"
            size="large"
            onClick={handleLoginNavigate}
          >
            {t("common.label.action.LOGIN")}
          </Button>
        </Conditional>
      </StyledActionButtons>
    </StyledErrorPage>
  );
};

const StyledErrorPage = styled(Stack)`
  height: 100vh;

  justify-content: center;
  align-items: center;
  row-gap: 32px;
`;

const StyledErrorIcon = styled(ErrorOutlineOutlined)`
  font-size: 80px;
  color: ${({ theme }) => theme.palette.semantic.error};
`;

const StyledActionButtons = styled(Flex)`
  justify-content: center;
  align-items: center;
  column-gap: 12px;
`;

export default ErrorPage;
