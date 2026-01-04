import BaseError from "@/errors/base-error";

class AuthorityError extends BaseError {
  constructor(message: string, showErrorMessage: boolean = false) {
    super(message, showErrorMessage);
  }
}

export default AuthorityError;
