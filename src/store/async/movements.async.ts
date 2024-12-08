import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createTransferApi,
  findUserApi,
  getBalanceApi,
  getMovementsApi,
} from "@services";

export const getBalanceAsync = createAsyncThunk(
  "movements/getBalance",
  getBalanceApi
);

export const getUserAsync = createAsyncThunk("movements/getUser", findUserApi);

export const getMovementsAsync = createAsyncThunk(
  "movements/getMovements",
  getMovementsApi
);

export const createTransferAsync = createAsyncThunk(
  "movements/createTransfer",
  createTransferApi
);
