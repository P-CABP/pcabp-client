import { RouteObject } from "react-router";

import HomePage from "@/pages/HomePage";
import useModeStore from "@/stores/mode-store";

const ShopRouter: RouteObject[] = [
  {
    path: "/",
    loader: () => useModeStore.getState().setMode("SHOP"),
    element: <HomePage />,
  },
];

export default ShopRouter;
