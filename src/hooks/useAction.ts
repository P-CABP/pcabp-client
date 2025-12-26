import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import QueryClient from "@/helpers/query-client";
import restService from "@/helpers/rest-service";
import { RestResponse } from "@/models/rest-model";

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
}

const useAction = <TVariables = unknown, TData = unknown>({
  url,
  method = "post",
  ...configs
}: UseActionConfig<TVariables, TData>) => {
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
    onError: () => {
      // TODO : Handle error message with i18n
      const errorMessage = "Error Message";

      // TODO : Handle error message with custom alert modal
      alert({
        type: "error",
        message: errorMessage,
      });
    },
    ...configs,
  });
};

export default useAction;
