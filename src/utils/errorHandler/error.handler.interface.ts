export interface IPromiseError {
  promiseError: {
    message: string;
    error: unknown;
  };
}

export type ICustomError = IPromiseError;
