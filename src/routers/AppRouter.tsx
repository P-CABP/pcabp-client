import { createBrowserRouter } from "react-router";

import HomePage from "@/pages/HomePage";

const AppRouter = createBrowserRouter([
  {
    // TODO : Error Boundary 추가
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default AppRouter;
