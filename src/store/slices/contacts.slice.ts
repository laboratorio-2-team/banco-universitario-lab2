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
  reducers: {
    contact: (state, action) => {
      state.contactSelected = action.payload;
    },
    removeContact: (state) => {
      state.contactSelected = null;
    }
  },

  extraReducers: (builder) => {
    getContactsListReducer(builder);
    createContactReducer(builder);
    updateContactReducer(builder);
    deleteContactReducer(builder);
    getContactReducer(builder);
  },
});

export const { contact, removeContact } = contactsSlice.actions;