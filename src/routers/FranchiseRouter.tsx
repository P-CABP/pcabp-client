import { RouteObject } from "react-router";

import useModeStore from "@/stores/mode-store";

const BackOfficeRouter: RouteObject[] = [
  {
    path: "franchise",
    loader: () => useModeStore.getState().setMode("FRANCHISE"),
    element: <>BO</>,
  },
];

export default BackOfficeRouter;
