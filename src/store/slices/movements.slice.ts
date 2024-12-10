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
  transferData: null
};

export const movementsSlice = createSlice({
  name: "movements",
  initialState,
  reducers: {
    transfer: (state, action) => {
      state.transferData = action.payload;
    },
    removeTransfer: (state) => {
      state.transferData = null;
      state.userToTransfer = null;
    },
  },

  extraReducers: (builder) => {
    getBalanceReducer(builder);
    getUserToTransferReducer(builder);
    getMovementsListReducer(builder);
  },
});

export const { transfer, removeTransfer } = movementsSlice.actions;