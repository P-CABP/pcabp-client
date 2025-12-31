import useAction from "@/hooks/useAction";
import useFetch from "@/hooks/useFetch";
import { SessionUser } from "@/models/user-model";
import { Nullable } from "@/types/common";

const SessionService = {
  useSession: () => {
    return useFetch<Nullable<SessionUser>>({
      url: "/v1/user/session",
    });
  },
  useLogin: () => {
    return useAction<{ username: string; password: string }>({
      url: `/login`,
      method: "post",
    });
  },
};

export default SessionService;
