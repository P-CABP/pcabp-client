import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import QueryClient from "@/helpers/query-client";
import restService from "@/helpers/rest-service";
import { RestResponse } from "@/models/rest-model";
import { useAlert } from "@/stores/system-modal-store";
import { useToast } from "@/stores/system-toast-store";

type HttpMethod = "post" | "put" | "patch" | "delete";

export interface UseActionConfig<TVariables, TData> extends Omit<
  UseMutationOptions<
    AxiosResponse<RestResponse<TData>>,
    AxiosError<RestResponse<string>>,
    TVariables
  >,
  "mutationFn"
> {
  url: string;
  method?: HttpMethod;
  showError?: boolean;
  showErrorType?: "toast" | "modal";
}

const useAction = <TVariables = unknown, TData = unknown>({
  url,
  method = "post",
  showError = true,
  showErrorType = "toast",
  ...configs
}: UseActionConfig<TVariables, TData>) => {
  const toast = useToast();
  const alert = useAlert();

  const queryKey = url.split("/");

  const mutationFn = (variables: TVariables) => {
    switch (method) {
      case "post":
        return restService.post<RestResponse<TData>>(url, variables);
      case "put":
        return restService.put<RestResponse<TData>>(url, variables);
      case "patch":
        return restService.patch<RestResponse<TData>>(url, variables);
      case "delete":
        return restService.delete<RestResponse<TData>>(url, {
          data: variables,
        });
      default:
        return restService.post<RestResponse<TData>>(url, variables);
    }
  };

  return useMutation<
    AxiosResponse<RestResponse<TData>>,
    AxiosError<RestResponse<string>>,
    TVariables
  >({
    mutationFn,
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey });
    },
    onError: (error) => {
      const errorMessage = error.response?.data.data;

      if (!showError) return;

      if (showErrorType === "toast") {
        toast({
          type: "error",
          message: errorMessage || "Unknown error",
        });
      } else if (showErrorType === "modal") {
        alert({
          type: "error",
          message: errorMessage || "Unknown error",
        });
      }
    },
    ...configs,
  });
};

export default useAction;
