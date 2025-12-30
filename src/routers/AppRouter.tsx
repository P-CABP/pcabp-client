import { createBrowserRouter } from "react-router";

import Layout from "@/components/layouts/Layout";
import AdminRouter from "@/routers/AdminRouter";
import DevRouter from "@/routers/DevRouter";
import ShopRouter from "@/routers/ShopRouter";
import StoreRouter from "@/routers/StoreRouter";

const AppRouter = createBrowserRouter([
  {
    // TODO : Error Boundary 추가
    children: [
      {
        element: <Layout />,
        children: [...AdminRouter, ...DevRouter, ...StoreRouter, ...ShopRouter],
      },
    ],
  },
]);

export default AppRouter;
