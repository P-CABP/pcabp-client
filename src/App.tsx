import { ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";

import SystemToast from "@/components/modals/SystemToast";
import queryClient from "@/helpers/query-client";
import AppRouter from "@/routers/AppRouter";
import theme from "@/themes/theme";

import "@/locales/i18n";

import "@/assets/styles/font.css";
import "@/assets/styles/global.css";
import "@/assets/styles/init.css";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={AppRouter} />
        <SystemToast />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
