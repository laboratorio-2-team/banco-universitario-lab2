import { AuthState } from "@interfaces/auth.interface";
import { createSlice } from "@reduxjs/toolkit";
import { getJWT, removeJWT } from "@services";
import {
  loginReducer,
  registerReducer,
  userDataReducer,
} from "@store/reducers";

const initialState: AuthState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.status = "idle";
      removeJWT();
    },
    setToken : (state) => {
      state.token = getJWT();
    }
  },
  extraReducers: (builder) => {
    loginReducer(builder);
    registerReducer(builder);
    userDataReducer(builder);
  },
});

export const { logout, setToken } = authSlice.actions;
