import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import restService from "@/helpers/rest-service";
import { RestResponse } from "@/models/rest-model";

export interface UseFetchConfig<T> extends Omit<
  UseQueryOptions<
    AxiosResponse<RestResponse<T>>,
    AxiosError<RestResponse<string>>,
    T
  >,
  "queryFn" | "queryKey" | "select"
> {
  url: string;
  params?: Record<string, unknown>;
}

const useFetch = <T>({ url, params, ...configs }: UseFetchConfig<T>) => {
  const queryKey = (() => {
    const splittedUrl: unknown[] = url.split("/");

    if (params) {
      splittedUrl.push({ ...params });
    }

    return splittedUrl;
  })();

  const queryFn = () => {
    return restService.get(url, {
      params,
    });
  };

  const select = (response: AxiosResponse<RestResponse<T>>) => {
    return response.data.data;
  };

  return useSuspenseQuery<
    AxiosResponse<RestResponse<T>>,
    AxiosError<RestResponse<string>>,
    T
  >({
    queryFn,
    queryKey,
    select,
    ...configs,
  });
};

export default useFetch;
