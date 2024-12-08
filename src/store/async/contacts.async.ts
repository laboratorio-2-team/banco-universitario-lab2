import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createTransferApi,
  deleteContactApi,
  getContact,
  getContacts,
  updateContactApi,
} from "@services";

export const createContactAsync = createAsyncThunk(
  "contacts/createContact",
  createTransferApi
);

export const updateContactAsync = createAsyncThunk(
  "contacts/updateContact",
  updateContactApi
);

export const deleteContactAsync = createAsyncThunk(
  "contacts/deleteContact",
  deleteContactApi
);

export const getContactsListAsync = createAsyncThunk(
  "contacts/getContacts",
  getContacts
);

export const getContactAsync = createAsyncThunk(
  "contacts/getContact",
  getContact
);
