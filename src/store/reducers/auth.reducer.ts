import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getJWT, setJWT } from "@services";
import {
  changePasswordAsync,
  getUserDataAsync,
  loginAsync,
  registerAsync,
} from "@store/async";
import { AuthState } from "@interfaces/auth.interface";

export function loginReducer(builder: ActionReducerMapBuilder<AuthState>) {
  const { addCase } = builder;

  addCase(loginAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
    state.user = null;
  });

  addCase(loginAsync.fulfilled, (state, action) => {
    const { jwt, ...user } = action.payload.data;

    setJWT(jwt);

    state.status = "idle";
    state.user = user;
    state.token = jwt;
  });

  addCase(loginAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;
  });
}

export function registerReducer(builder: ActionReducerMapBuilder<AuthState>) {
  const { addCase } = builder;

  addCase(registerAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
    state.user = null;
  });

  addCase(registerAsync.fulfilled, (state, action) => {
    const { jwt, ...user } = action.payload.data;

    setJWT(jwt);

    state.status = "idle";
    state.user = user;
    state.token = jwt;
  });

  addCase(registerAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;
  });
}

export function userDataReducer(builder: ActionReducerMapBuilder<AuthState>) {
  const { addCase } = builder;

  addCase(getUserDataAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
  });

  addCase(getUserDataAsync.fulfilled, (state, action) => {
    state.status = "idle";
    state.user = action.payload.data;
    state.token = getJWT();
  });

  addCase(getUserDataAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;
  });
}

export function changePasswordReducer(
  builder: ActionReducerMapBuilder<AuthState>
) {
  const { addCase } = builder;

  addCase(changePasswordAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
  });

  addCase(changePasswordAsync.fulfilled, (state) => {
    state.status = "idle";
  });

  addCase(changePasswordAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;
  });
}
