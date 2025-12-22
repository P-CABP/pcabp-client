import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "@/helpers/query-client";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <>App</>
    </QueryClientProvider>
  );
};

export default App;
