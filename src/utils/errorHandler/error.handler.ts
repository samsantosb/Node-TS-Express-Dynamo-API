import { IPromiseError } from "./error.handler.interface";

export function promiseError(error: unknown): IPromiseError {
  return {
    promiseError: {
      message: "Error during the Database request",
      error: error,
    },
  };
}
