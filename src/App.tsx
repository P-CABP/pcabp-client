import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";

import queryClient from "@/helpers/query-client";
import AppRouter from "@/routers/AppRouter";

import "@/locales/i18n";

import "@/assets/styles/font.css";
import "@/assets/styles/global.css";
import "@/assets/styles/init.css";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={AppRouter} />
    </QueryClientProvider>
  );
};

export default App;
