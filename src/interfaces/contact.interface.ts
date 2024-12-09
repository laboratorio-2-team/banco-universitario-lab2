import { ResponseInterface } from "./response.interface";
import { LoadingStates } from "./ui.interface";

export interface CreateContactParam {
  alias: string;
  account_number: string;
  description: string;
}
export interface UpdateContactParam {
  alias: string;
  description: string;
  id: number;
}

export interface GetContactsListParam {
  page: number;
  alias?: string;
  page_size: number;
}

export interface ContactData {
  alias: string;
  account_number: string;
  description: string;
  created_at: string;
  id: number;
  updated_at: string;
}

export interface ContactsState {
  contactsList: ContactData[];
  contactSelected: ContactData | null;
  status: LoadingStates;
  error: string | null;
}

export interface ContactResponse extends ResponseInterface<ContactData> {}
export interface ContactListResponse extends ResponseInterface<ContactData[]> {}
