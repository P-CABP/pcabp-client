import { RouteObject } from "react-router";

import DevGuard from "@/components/guards/DevGuard";
import DevButtonPage from "@/pages/dev/button/DevButtonPage";
import DevPage from "@/pages/dev/DevPage";
import DevPalettePage from "@/pages/dev/palette/DevPalettePage";
import DevTypographyPage from "@/pages/dev/typography/DevTypographyPage";

const DevRouter: RouteObject[] = [
  {
    path: "dev",
    element: <DevGuard />,
    children: [
      {
        index: true,
        element: <DevPage />,
      },
      {
        path: "palette",
        element: <DevPalettePage />,
      },
      {
        path: "typography",
        element: <DevTypographyPage />,
      },
      {
        path: "button",
        element: <DevButtonPage />,
      },
    ],
  },
];

export default DevRouter;
