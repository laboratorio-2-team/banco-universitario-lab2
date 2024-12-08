import { configureStore } from "@reduxjs/toolkit";
import { authSlice, contactsSlice, movementsSlice } from "./slices";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    movements: movementsSlice.reducer,
    contacts: contactsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
