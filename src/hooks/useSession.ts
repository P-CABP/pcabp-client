import { Authority, SessionUser } from "@/models/user-model";
import { Nullable } from "@/types/common";

const useSession = (session: Nullable<SessionUser>) => {
  const isAdmin = session?.authorities.includes(Authority.ADMIN);

  const isManager = session?.authorities.includes(Authority.MANAGER);

  const isDeveloper = session?.authorities.includes(Authority.DEVELOPER);

  const isAuthenticated = session !== null;

  return {
    isAdmin,
    isManager,
    isDeveloper,
    isAuthenticated,
  };
};

export default useSession;
