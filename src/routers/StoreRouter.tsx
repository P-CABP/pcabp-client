import { RouteObject } from "react-router";

import useModeStore from "@/stores/mode-store";

const StoreRouter: RouteObject[] = [
  {
    path: "store",
    loader: () => useModeStore.getState().setMode("STORE"),
    element: <>BO</>,
  },
];

export default StoreRouter;
