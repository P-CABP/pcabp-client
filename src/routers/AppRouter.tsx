import { createBrowserRouter } from "react-router";

import GlobalLayout from "@/components/layouts/GlobalLayout";
import Layout from "@/components/layouts/Layout";
import ErrorPage from "@/pages/error/ErrorPage";
import LoginPage from "@/pages/login/LoginPage";
import AdminRouter from "@/routers/AdminRouter";
import DevRouter from "@/routers/DevRouter";
import ShopRouter from "@/routers/ShopRouter";
import StoreRouter from "@/routers/StoreRouter";

const AppRouter = createBrowserRouter([
  {
    element: <GlobalLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        element: <Layout />,
        children: [...AdminRouter, ...DevRouter, ...StoreRouter, ...ShopRouter],
      },
    ],
  },
]);

export default AppRouter;
