import { RouteObject } from "react-router";

import AdminGuard from "@/components/guards/AdminGuard";
import AdminPage from "@/pages/admin/AdminPage";
import useModeStore from "@/stores/mode-store";

const AdminRouter: RouteObject[] = [
  {
    path: "admin",
    loader: () => useModeStore.getState().setMode("ADMIN"),
    element: <AdminGuard />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
];

export default AdminRouter;
