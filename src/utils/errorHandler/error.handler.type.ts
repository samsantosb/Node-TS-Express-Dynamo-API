export interface PromiseError {
  promiseError: {
    message: string;
    error: unknown;
  };
}

export type CustomError = PromiseError;
