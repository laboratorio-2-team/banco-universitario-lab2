import { ResponseInterface } from "./response.interface";
import { LoadingStates } from "./ui.interface";
export interface LoginParam {
  email: string;
  password: string;
}
export interface RegisterParam {
  first_name: string;
  last_name: string;
  document_number: string;
  birth_date: string;
  phone_number: string;
  email: string;
  password: string;
}

export interface AuthData {
  account_number: string;
  birth_date: Date;
  document_number: string;
  email: string;
  first_name: string;
  jwt: string;
  last_name: string;
  phone_number: string;
}

export interface UserData {
  account_number: string;
  birth_date: Date;
  document_number: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}

export interface AuthState {
  user: Partial<AuthData> | null;
  token: string | null;
  status: LoadingStates;
  error: string | null;
}

export interface BalanceData {
  balance: number;
  last_time: string;
}

export interface AuthResponse extends ResponseInterface<AuthData> {}

export interface BalanceResponse extends ResponseInterface<BalanceData> {}

export interface UserResponse extends ResponseInterface<UserData> {}

