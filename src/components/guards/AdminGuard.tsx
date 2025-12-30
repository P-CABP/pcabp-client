import { Outlet } from "react-router";

const AdminGuard = () => {
  // TODO : 관리자 권한이 있는 경우만 통과하고 아닌 경우 권한 없음 에러를 던지도록 설정

  return <Outlet />;
};

export default AdminGuard;
