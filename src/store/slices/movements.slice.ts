import { MovementsState } from "@interfaces/movements.interface";
import { createSlice } from "@reduxjs/toolkit";
import {
  getBalanceReducer,
  getMovementsListReducer,
  getUserToTransferReducer,
} from "@store/reducers";

const initialState: MovementsState = {
  error: null,
  movementsList: [],
  status: "idle",
  userBalance: null,
  userToTransfer: null,
};

export const movementsSlice = createSlice({
  name: "movements",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    getBalanceReducer(builder);
    getUserToTransferReducer(builder);
    getMovementsListReducer(builder);
  },
});
