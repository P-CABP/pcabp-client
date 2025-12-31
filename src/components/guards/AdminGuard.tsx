import { Outlet } from "react-router";

import useSession from "@/hooks/useSession";
import SessionService from "@/services/session-service";

const AdminGuard = () => {
  const { data: session } = SessionService.useSession();

  const { isAdmin } = useSession(session);

  if (!isAdmin) {
    throw new Error("Unauthorized");
  }

  return <Outlet />;
};

export default AdminGuard;
