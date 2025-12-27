import { createBrowserRouter } from "react-router";

import GlobalLayout from "@/components/layouts/GlobalLayout";
import HomePage from "@/pages/HomePage";
import DevRouter from "@/routers/DevRouter";

const AppRouter = createBrowserRouter([
  {
    // TODO : Error Boundary 추가
    children: [
      {
        element: <GlobalLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          ...DevRouter,
        ],
      },
    ],
  },
]);

export default AppRouter;
