import { RouteObject } from "react-router";

import DevGuard from "@/components/guards/DevGuard";
import DevLayout from "@/components/layouts/DevLayout";
import DevPage from "@/pages/dev/DevPage";
import DevPalettePage from "@/pages/dev/palette/DevPalettePage";

const DevRouter: RouteObject[] = [
  {
    path: "dev",
    element: <DevGuard />,
    children: [
      {
        element: <DevLayout />,
        children: [
          {
            index: true,
            element: <DevPage />,
          },
          {
            path: "palette",
            element: <DevPalettePage />,
          },
        ],
      },
    ],
  },
];

export default DevRouter;
