import { createAsyncThunk } from "@reduxjs/toolkit";

import { REDUX_CONSTANTS } from "../../helpers/constants/redux-constants";

import { IProduct } from "../../types/redux/redux-types";

import * as api from "../../helpers/api/api";

import { toast } from "react-toastify";

const { ACTION_NAME_PRODUCTS } = REDUX_CONSTANTS;

export const getProductsForCompanyOperation = createAsyncThunk<
  IProduct[],
  string,
  { rejectValue: string }
>(ACTION_NAME_PRODUCTS, async (id, { rejectWithValue }) => {
  try {
    const productsForCompany: IProduct[] =
      await api.getProductsForCompanyApiService(id);

    return productsForCompany;
  } catch (error: any) {
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});
