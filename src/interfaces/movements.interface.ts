import { UserData } from "./auth.interface";
import { ResponseInterface } from "./response.interface";
import { LoadingStates } from "./ui.interface";

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

export interface MovementsState {
  movementsList: MovementsData[];
  userBalance: number | null;
  status: LoadingStates;
  error: any;
  userToTransfer: UserData | null;
  transferData: TransferParams | null;
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
