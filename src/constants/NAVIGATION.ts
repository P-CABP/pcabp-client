export const ADMIN = [
  {
    name: "대시보드",
    path: "/admin",
  },
  {
    name: "사용자",
    path: "/admin/users",
  },
] as const;

export const STORE = [
  {
    name: "가맹점",
    path: "/stores",
  },
  {
    name: "상품",
    path: "/stores/products",
  },
] as const;

export const SHOP = [
  {
    name: "홈",
    path: "/",
  },
  {
    name: "주문조회",
    path: "/orders",
  },
] as const;

export const DEVELOP = [
  {
    name: "Palette",
    path: "/dev/palette",
  },
  {
    name: "Typography",
    path: "/dev/typography",
  },
  {
    name: "Button",
    path: "/dev/button",
  },
] as const;

export const NAVIGATION = {
  ADMIN,
  STORE,
  SHOP,
  DEVELOP,
} as const;
