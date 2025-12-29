import { RouteObject } from "react-router";

import HomePage from "@/pages/HomePage";
import useModeStore from "@/stores/mode-store";

const StoreRouter: RouteObject[] = [
  {
    path: "/",
    loader: () => useModeStore.getState().setMode("STORE"),
    element: <HomePage />,
  },
];

export default StoreRouter;
