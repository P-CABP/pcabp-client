import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";

import AuthorityError from "@/errors/authority-error";
import useSession from "@/hooks/useSession";
import SessionService from "@/services/session-service";

const StoreGuard = () => {
  const { t } = useTranslation();
  const { data: session } = SessionService.useSession();

  const { isManager } = useSession(session);

  if (!isManager) {
    throw new AuthorityError(t("user.message.UNAUTHORIZED"), true);
  }

  return <Outlet />;
};

export default StoreGuard;
