import { ResponseInterface } from "./response.interface";

export interface TransferParams {
  amount: number;
  account_number: string;
  description: string;
}

export interface GetMovementsParams {
  page: number;
  page_size: number;
  multiplier?: number;
}

export interface MovementsData {
  account_number: string;
  amount: number;
  balance: number;
  created_at: string;
  description: string;
  id: number;
  multiplier: number;
  updated_at: string;
}

export interface ResponseMovements extends ResponseInterface<MovementsData[]> {}
export interface ResponseTransfer extends ResponseInterface<MovementsData> {}
