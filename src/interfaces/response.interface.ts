export interface ResponseInterface<T> {
  data: T;
  errors: [{ error: string }];
  message: string;
}
