import { useTranslation } from "react-i18next";

import AuthorityError from "@/errors/authority-error";
import BaseError from "@/errors/base-error";

const useError = (error: unknown) => {
  const { t } = useTranslation();

  const errorMessage = (() => {
    if (error instanceof BaseError && error.showErrorMessage) {
      return error.message;
    }

    return t("common.message.ERROR_OCCURRED");
  })();

  const isAuthorityError = error instanceof AuthorityError;

  return {
    errorMessage,
    isAuthorityError,
  };
};

export default useError;
