import { Outlet } from "react-router";

import useSession from "@/hooks/useSession";
import SessionService from "@/services/session-service";

const StoreGuard = () => {
  const { data: session } = SessionService.useSession();

  const { isManager } = useSession(session);

  if (!isManager) {
    throw new Error("Unauthorized");
  }

  return <Outlet />;
};

export default StoreGuard;
