import { CustomError } from "./custom_error";

export class NotFoundError extends CustomError {
  public statusCode = 404;

  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  public serializeErrors() {
    return [{ message: 'Not Found' }];
  }
}