import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { REDUX_CONSTANTS } from "../../helpers/constants/redux-constants";

import {
  IOrder,
  IOrdersHistorySliceInitialState,
} from "../../types/redux/redux-types";

import { getOrdersHistoryOperation } from "./ordersHistoryOperations";

const {
  SLICE_STATE_KEY_ORDERS_HISTORY,
  SLICE_STATE_KEY_ERROR,
  SLICE_STATE_KEY_LOADING,
} = REDUX_CONSTANTS;

const initialState: IOrdersHistorySliceInitialState = {
  [SLICE_STATE_KEY_ORDERS_HISTORY]: null,
  [SLICE_STATE_KEY_LOADING]: false,
  [SLICE_STATE_KEY_ERROR]: null,
};

const ordersHistorySlice = createSlice({
  name: SLICE_STATE_KEY_ORDERS_HISTORY,

  initialState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(getOrdersHistoryOperation.pending, state => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getOrdersHistoryOperation.fulfilled,
      (state, { payload }: PayloadAction<IOrder[]>) => {
        state.ordersHistory = payload;
        state.loading = false;
      }
    );

    builder.addCase(
      getOrdersHistoryOperation.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export default ordersHistorySlice.reducer;
