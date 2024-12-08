import { createAsyncThunk } from "@reduxjs/toolkit";
import { changePasswordApi, loginApi, registerApi, whoImIApi } from "@services";

export const loginAsync = createAsyncThunk("auth/login", loginApi);

export const registerAsync = createAsyncThunk("auth/register", registerApi);

export const getUserDataAsync = createAsyncThunk("auth/getUserData", whoImIApi);

export const changePasswordAsync = createAsyncThunk(
  "auth/changePassword",
  changePasswordApi
);
