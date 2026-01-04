class BaseError extends Error {
  showErrorMessage: boolean;

  constructor(message: string, showErrorMessage: boolean = false) {
    super(message);
    this.showErrorMessage = showErrorMessage;
  }
}

export default BaseError;
