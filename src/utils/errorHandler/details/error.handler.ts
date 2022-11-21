import { PromiseError } from "../abstraction/error.handler.type";

export function promiseError(error: unknown): PromiseError {
  return {
    promiseError: {
      message: "Error during the Database request",
      error: error,
    },
  };
}
