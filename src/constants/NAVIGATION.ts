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

export const FRANCHISE = [
  {
    name: "가맹점",
    path: "/franchise",
  },
  {
    name: "상품",
    path: "/franchise/products",
  },
] as const;

export const STORE = [
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
  FRANCHISE,
  STORE,
  DEVELOP,
} as const;
