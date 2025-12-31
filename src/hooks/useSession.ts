import { SessionUser } from "@/models/user-model";
import { Nullable } from "@/types/common";

const useSession = (session: Nullable<SessionUser>) => {
  const isAdmin = session?.authorities.includes("ADMIN");

  const isAuthenticated = session !== null;

  return {
    isAdmin,
    isAuthenticated,
  };
};

export default useSession;
