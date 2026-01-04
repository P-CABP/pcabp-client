import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common from "@/locales/ko/common.json";
import user from "@/locales/ko/user.json";

i18n.use(initReactI18next).init({
  resources: {
    ko: {
      translation: {
        common: common,
        user: user,
      },
    },
  },
  lng: "ko",
  fallbackLng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
