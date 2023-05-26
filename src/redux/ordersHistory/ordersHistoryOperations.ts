import { createAsyncThunk } from "@reduxjs/toolkit";

import { REDUX_CONSTANTS } from "./../../helpers/constants/redux-constants";

import { IOrder } from "../../types/redux/redux-types";

import * as api from "../../helpers/api/api";

import { toast } from "react-toastify";

const { ACTION_NAME_ORDERS_HISTORY } = REDUX_CONSTANTS;

export const getOrdersHistoryOperation = createAsyncThunk<
  IOrder[],
  { phone: string; email: string },
  { rejectValue: string }
>(ACTION_NAME_ORDERS_HISTORY, async ({ phone, email }, { rejectWithValue }) => {
  try {
    const ordersHistory: IOrder[] = await api.getOrdersHistoryApiService({
      phone,
      email,
    });

    return ordersHistory;
  } catch (error: any) {
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});
