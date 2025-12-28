import { RouteObject } from "react-router";

import AdminGuard from "@/components/guards/AdminGuard";
import AdminPage from "@/pages/admin/AdminPage";

const AdminRouter: RouteObject[] = [
  {
    path: "admin",
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
