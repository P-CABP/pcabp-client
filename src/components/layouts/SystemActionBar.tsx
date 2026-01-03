import {
  AdminPanelSettingsOutlined,
  Code,
  Storefront,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import IconTextButton from "@/components/buttons/IconTextButton";
import Conditional from "@/components/wrappers/Conditional";
import { Authority } from "@/models/user-model";
import SessionService from "@/services/session-service";
import { Mode } from "@/stores/mode-store";

const SystemActionBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: session } = SessionService.useSession();

  const handleModeNavigate = (mode: Mode) => {
    switch (mode) {
      case "ADMIN":
        navigate("/admin");
        break;
      case "STORE":
        navigate("/store");
        break;
      case "DEVELOP":
        navigate("/dev");
        break;
    }
  };

  return (
    <Conditional conditions={session?.authorities ?? []}>
      <Conditional.Value value={Authority.ADMIN}>
        <IconTextButton
          text={t("common.label.title.ADMIN")}
          size="large"
          onClick={() => handleModeNavigate("ADMIN")}
        >
          <AdminPanelSettingsOutlined fontSize="large" />
        </IconTextButton>
      </Conditional.Value>
      <Conditional.Value value={Authority.MANAGER}>
        <IconTextButton
          text={t("common.label.title.STORE")}
          size="large"
          onClick={() => handleModeNavigate("STORE")}
        >
          <Storefront fontSize="large" />
        </IconTextButton>
      </Conditional.Value>
      <Conditional.Value value={Authority.DEVELOPER}>
        <IconTextButton
          text={t("common.label.title.DEVELOP")}
          size="large"
          onClick={() => handleModeNavigate("DEVELOP")}
        >
          <Code fontSize="large" />
        </IconTextButton>
      </Conditional.Value>
    </Conditional>
  );
};

export default SystemActionBar;
