import i18n from "@/locales/i18n";

export function requiredValueMessage(valueCode: string) {
  return i18n.t("common.message.REQUIRED_VALUE", { value: i18n.t(valueCode) });
}
