import { createBrowserRouter } from "react-router";

import GlobalLayout from "@/components/layouts/GlobalLayout";
import Layout from "@/components/layouts/Layout";
import LoginPage from "@/pages/login/LoginPage";
import AdminRouter from "@/routers/AdminRouter";
import DevRouter from "@/routers/DevRouter";
import ShopRouter from "@/routers/ShopRouter";
import StoreRouter from "@/routers/StoreRouter";

const AppRouter = createBrowserRouter([
  {
    // TODO : Error Boundary 추가
    element: <GlobalLayout />,
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
