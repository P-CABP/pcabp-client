import { HomeOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import IconTextButton from "@/components/buttons/IconTextButton";
import Conditional from "@/components/wrappers/Conditional";
import useSession from "@/hooks/useSession";
import SessionService from "@/services/session-service";

const UserActionBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: session } = SessionService.useSession();

  const { isAuthenticated } = useSession(session);

  const handleHomeNavigate = () => {
    navigate("/");
  };

  const handleUserNavigate = () => {
    // TODO : Go to user page
  };

  return (
    <Conditional conditions={[true]}>
      <IconTextButton
        text={t("common.label.title.HOME")}
        size="large"
        onClick={handleHomeNavigate}
      >
        <HomeOutlined fontSize="large" />
      </IconTextButton>
      <Conditional.Value value={isAuthenticated}>
        <IconTextButton
          text={t("common.label.title.USER")}
          size="large"
          onClick={handleUserNavigate}
        >
          <PersonOutlineOutlined fontSize="large" />
        </IconTextButton>
      </Conditional.Value>
    </Conditional>
  );
};

export default UserActionBar;
