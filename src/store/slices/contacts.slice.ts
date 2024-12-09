import { ContactsState } from "@interfaces/contact.interface";
import { createSlice } from "@reduxjs/toolkit";
import {
  createContactReducer,
  deleteContactReducer,
  getContactReducer,
  getContactsListReducer,
  updateContactReducer,
} from "@store/reducers";

const initialState: ContactsState = {
  contactsList: [],
  error: null,
  status: "idle",
  contactSelected: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    getContactsListReducer(builder);
    createContactReducer(builder);
    updateContactReducer(builder);
    deleteContactReducer(builder);
    getContactReducer(builder);
  },
});
