import { keepPreviousData, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData,
    },
  },
});

export default queryClient;
