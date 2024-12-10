import { ContactsState } from "@interfaces/contact.interface";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  errorNotification,
  successNotification,
} from "@services/notification.service";
import {
  createContactAsync,
  deleteContactAsync,
  getContactAsync,
  getContactsListAsync,
  updateContactAsync,
} from "@store/async";

export function getContactsListReducer(
  builder: ActionReducerMapBuilder<ContactsState>
) {
  const { addCase } = builder;

  addCase(getContactsListAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
  });

  addCase(getContactsListAsync.fulfilled, (state, action) => {
    const { data } = action.payload.data;
    console.log(data);
    state.status = "succeeded";
    state.contactsList = data;

    successNotification(action.payload.data.message);
  });

  addCase(getContactsListAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;

    errorNotification(action.error.message!);
  });
}

export function createContactReducer(
  builder: ActionReducerMapBuilder<ContactsState>
) {
  const { addCase } = builder;

  addCase(createContactAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
  });

  addCase(createContactAsync.fulfilled, (state, action) => {
    const newContact = action.payload.data;

    state.status = "succeeded";
    state.contactsList = [newContact, ...state.contactsList];
    successNotification(action.payload.message);
  });

  addCase(createContactAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;
    errorNotification(action.error.message!);
  });
}

export function updateContactReducer(
  builder: ActionReducerMapBuilder<ContactsState>
) {
  const { addCase } = builder;

  addCase(updateContactAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
  });

  addCase(updateContactAsync.fulfilled, (state, action) => {
    const newContact = action.payload.data;

    state.status = "succeeded";
    state.contactsList = state.contactsList.map((contact) =>
      contact.id === newContact.id ? newContact : contact
    );

    successNotification(action.payload.message);
  });

  addCase(updateContactAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;

    errorNotification(action.error.message!);
  });
}

export function deleteContactReducer(
  builder: ActionReducerMapBuilder<ContactsState>
) {
  const { addCase } = builder;

  addCase(deleteContactAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
  });

  addCase(deleteContactAsync.fulfilled, (state, action) => {
    const { id } = action.payload.data;

    state.status = "succeeded";
    state.contactsList = state.contactsList.filter(
      (contact) => contact.id !== id
    );

    successNotification(action.payload.message);
  });

  addCase(deleteContactAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;

    errorNotification(action.error.message!);
  });
}

export function getContactReducer(
  builder: ActionReducerMapBuilder<ContactsState>
) {
  const { addCase } = builder;

  addCase(getContactAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
  });

  addCase(getContactAsync.fulfilled, (state, action) => {
    state.status = "succeeded";
    state.contactSelected = action.payload.data;
    
    successNotification(action.payload.message);
  });

  addCase(getContactAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;

    errorNotification(action.error.message!);
  });
}
