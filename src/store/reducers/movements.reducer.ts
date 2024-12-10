import { MovementsState } from "@interfaces/movements.interface";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  errorNotification,
  successNotification,
} from "@services/notification.service";
import {
  createTransferAsync,
  getBalanceAsync,
  getMovementsAsync,
  getUserAsync,
} from "@store/async";

export function getBalanceReducer(
  builder: ActionReducerMapBuilder<MovementsState>
) {
  const { addCase } = builder;

  addCase(getBalanceAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
  });

  addCase(getBalanceAsync.fulfilled, (state, action) => {
    const { balance } = action.payload.data;

    state.status = "succeeded";
    state.userBalance = balance;

    successNotification(action.payload.message);
  });

  addCase(getBalanceAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;

    errorNotification(action.error.message!);
  });
}

export function getUserToTransferReducer(
  builder: ActionReducerMapBuilder<MovementsState>
) {
  const { addCase } = builder;

  addCase(getUserAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
  });

  addCase(getUserAsync.fulfilled, (state, action) => {
    state.status = "succeeded";
    state.userToTransfer = action.payload.data;
    successNotification(action.payload.message);
  });

  addCase(getUserAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;
    errorNotification(action.error.message!);
  });
}

export function getMovementsListReducer(
  builder: ActionReducerMapBuilder<MovementsState>
) {
  const { addCase } = builder;

  addCase(getMovementsAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
  });

  addCase(getMovementsAsync.fulfilled, (state, action) => {
    state.status = "succeeded";
    state.movementsList = action.payload.data.data;
    successNotification('Movimientos obtenidos con éxito');
  });

  addCase(getMovementsAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;
    errorNotification(action.error.message!);
  });
}

export function createTransferReducer(
  builder: ActionReducerMapBuilder<MovementsState>
) {
  const { addCase } = builder;

  addCase(createTransferAsync.pending, (state) => {
    state.status = "loading";
    state.error = null;
  });

  addCase(createTransferAsync.fulfilled, (state, action) => {
    state.status = "succeeded";
    state.userBalance = action.payload.data.balance;
    successNotification(action.payload.message);
  });

  addCase(createTransferAsync.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.error.message as string;
    errorNotification(action.error.message!);
  });
}
