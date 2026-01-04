import useAction from "@/hooks/useAction";
import useFetch from "@/hooks/useFetch";
import { SessionLogin, SessionUser } from "@/models/user-model";
import { Nullable } from "@/types/common";

const BASE_URL = "/v1/session";

const SessionService = {
  useSession: () => {
    return useFetch<Nullable<SessionUser>>({
      url: BASE_URL,
    });
  },
  useLogin: () => {
    return useAction<SessionLogin, SessionUser>({
      url: "login",
      method: "post",
      invalidateUrl: BASE_URL,
    });
  },
  useLogout: () => {
    return useAction<void>({
      url: BASE_URL,
      method: "delete",
    });
  },
};

export default SessionService;
