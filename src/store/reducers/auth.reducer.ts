import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getJWT, setJWT } from "@services";
import {
  changePasswordAsync,
  getUserDataAsync,
  loginAsync,
  registerAsync,
} from "@store/async";
import { AuthState } from "@interfaces/auth.interface";
import {
  errorNotification,
  successNotification,
} from "@services/notification.service";

export function loginReducer(builder: ActionReducerMapBuilder<AuthState>) {
  const { addCase } = builder;

  addCase(loginAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
    state.user = null;
  });

  addCase(loginAsync.fulfilled, (state, action) => {
    const { jwt, ...user } = action.payload.data;

    successNotification(action.payload.message);
    setJWT(jwt);

    state.status = "succeeded";
    state.user = user;
    state.token = jwt;
  });

  addCase(loginAsync.rejected, (state, action) => {
    const payload = action;

    console.log({ payload });

    state.status = "failed";
    state.error = action.error.message as string;

    errorNotification("Credenciales invalidas");
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

    state.status = "succeeded";
    state.user = user;
    state.token = jwt;

    successNotification(action.payload.message);
  });

  addCase(registerAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;

    errorNotification("Error al registrar usuario");
  });
}

export function userDataReducer(builder: ActionReducerMapBuilder<AuthState>) {
  const { addCase } = builder;

  addCase(getUserDataAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
  });

  addCase(getUserDataAsync.fulfilled, (state, action) => {
    state.status = "succeeded";
    state.user = action.payload.data;
    state.token = getJWT();
  });

  addCase(getUserDataAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;

    errorNotification("Token Vencido");
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

  addCase(changePasswordAsync.fulfilled, (state, { payload }) => {
    state.status = "succeeded";
    successNotification(payload.message);
  });

  addCase(changePasswordAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;

    errorNotification("Error al cambiar contraseña");
  });
}
