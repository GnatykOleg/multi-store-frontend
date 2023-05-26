import { createAsyncThunk } from "@reduxjs/toolkit";

import { REDUX_CONSTANTS } from "../../helpers/constants/redux-constants";

import { IOrder } from "../../types/redux/redux-types";

import * as api from "../../helpers/api/api";

import { toast } from "react-toastify";

const { ACTION_NAME_ORDER } = REDUX_CONSTANTS;

export const makeOrderOperation = createAsyncThunk<
  IOrder,
  IOrder,
  { rejectValue: string }
>(ACTION_NAME_ORDER, async (order, { rejectWithValue }) => {
  try {
    const result: IOrder = await api.makeOrderApiService(order);

    toast.success("You successfully make order!");

    return result;
  } catch (error: any) {
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});
