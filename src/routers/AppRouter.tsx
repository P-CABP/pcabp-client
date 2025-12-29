import { createBrowserRouter } from "react-router";

import Layout from "@/components/layouts/Layout";
import AdminRouter from "@/routers/AdminRouter";
import DevRouter from "@/routers/DevRouter";
import FranchiseRouter from "@/routers/FranchiseRouter";
import StoreRouter from "@/routers/StoreRouter";

const AppRouter = createBrowserRouter([
  {
    // TODO : Error Boundary 추가
    children: [
      {
        element: <Layout />,
        children: [
          ...AdminRouter,
          ...DevRouter,
          ...FranchiseRouter,
          ...StoreRouter,
        ],
      },
    ],
  },
]);

export default AppRouter;
