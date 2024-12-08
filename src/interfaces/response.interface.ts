export interface ResponseInterface<T> {
  data: T;
  errors: [unknown];
  messages: string;
}
