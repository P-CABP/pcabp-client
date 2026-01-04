import BaseError from "@/errors/base-error";

class DevelopError extends BaseError {
  constructor(message: string) {
    super(message, true);
  }
}

export default DevelopError;
