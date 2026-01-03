import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import IconTextButton from "@/components/buttons/IconTextButton";
import Conditional from "@/components/wrappers/Conditional";
import useSession from "@/hooks/useSession";
import SessionService from "@/services/session-service";

const SessionActionBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: session } = SessionService.useSession();
  const { mutate: logout } = SessionService.useLogout();

  const { isAuthenticated } = useSession(session);

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Conditional.Activity active={isAuthenticated}>
        <IconTextButton
          text={t("common.label.action.LOGOUT")}
          size="large"
          onClick={handleLogout}
        >
          <LockOutlinedIcon fontSize="large" />
        </IconTextButton>
      </Conditional.Activity>
      <Conditional.Activity active={!isAuthenticated}>
        <IconTextButton
          text={t("common.label.action.LOGIN")}
          size="large"
          onClick={handleLogin}
        >
          <LockOpenIcon fontSize="large" />
        </IconTextButton>
      </Conditional.Activity>
    </>
  );
};

export default SessionActionBar;
