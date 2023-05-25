import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { REDUX_CONSTANTS } from "../../helpers/constants/redux-constants";

import {
  IProduct,
  IProductsSliceInitialState,
} from "../../types/redux/redux-types";

import { getProductsForCompanyOperation } from "./productsOperations";

const {
  SLICE_STATE_KEY_PRODUCTS,
  SLICE_STATE_KEY_ERROR,
  SLICE_STATE_KEY_LOADING,
} = REDUX_CONSTANTS;

const initialState: IProductsSliceInitialState = {
  [SLICE_STATE_KEY_PRODUCTS]: null,
  [SLICE_STATE_KEY_LOADING]: false,
  [SLICE_STATE_KEY_ERROR]: null,
};

const productsSlice = createSlice({
  name: SLICE_STATE_KEY_PRODUCTS,

  initialState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(getProductsForCompanyOperation.pending, state => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getProductsForCompanyOperation.fulfilled,
      (state, { payload }: PayloadAction<IProduct[]>) => {
        state.products = payload;
        state.loading = false;
      }
    );

    builder.addCase(
      getProductsForCompanyOperation.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export default productsSlice.reducer;
