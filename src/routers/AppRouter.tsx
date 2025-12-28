import { createBrowserRouter } from "react-router";

import Layout from "@/components/layouts/Layout";
import HomePage from "@/pages/HomePage";
import AdminRouter from "@/routers/AdminRouter";
import DevRouter from "@/routers/DevRouter";

const AppRouter = createBrowserRouter([
  {
    // TODO : Error Boundary 추가
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          ...AdminRouter,
          ...DevRouter,
        ],
      },
    ],
  },
]);

export default AppRouter;
