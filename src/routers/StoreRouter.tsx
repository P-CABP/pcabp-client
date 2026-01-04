import { RouteObject } from "react-router";

import StoreGuard from "@/components/guards/StoreGuard";
import useModeStore from "@/stores/mode-store";

const StoreRouter: RouteObject[] = [
  {
    path: "store",
    loader: () => useModeStore.getState().setMode("STORE"),
    element: <StoreGuard />,
    children: [
      {
        index: true,
        element: <>BO</>,
      },
    ],
  },
];

export default StoreRouter;
