import useAction from "@/hooks/useAction";
import useFetch from "@/hooks/useFetch";
import { SessionLogin, SessionUser } from "@/models/user-model";
import { Nullable } from "@/types/common";

const SessionService = {
  useSession: () => {
    return useFetch<Nullable<SessionUser>>({
      url: "/v1/session",
    });
  },
  useLogin: () => {
    return useAction<SessionLogin, SessionUser>({
      url: `/login`,
      method: "post",
    });
  },
  useLogout: () => {
    return useAction<void>({
      url: "/v1/session",
      method: "delete",
    });
  },
};

export default SessionService;
