import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { REDUX_CONSTANTS } from "../../helpers/constants/redux-constants";

import {
  ICartSliceInitialState,
  IProduct,
} from "../../types/redux/redux-types";

import { makeOrderOperation } from "./cartOperations";

const {
  SLICE_STATE_KEY_CART,
  SLICE_STATE_KEY_TOTAL_PRICE,
  SLICE_STATE_KEY_LOADING,
  SLICE_STATE_KEY_ERROR,
} = REDUX_CONSTANTS;

const initialState: ICartSliceInitialState = {
  [SLICE_STATE_KEY_CART]: [] as IProduct[],
  [SLICE_STATE_KEY_TOTAL_PRICE]: 0,
  [SLICE_STATE_KEY_LOADING]: false,
  [SLICE_STATE_KEY_ERROR]: null,
};

const cartSlice = createSlice({
  name: SLICE_STATE_KEY_CART,

  initialState,

  reducers: {
    addProductToCart(state, { payload }: PayloadAction<IProduct>) {
      state.cart = [...state.cart, { ...payload, quantity: 1 }];

      state.totalPrice += payload.price;
    },

    removeProductFromCart(state, { payload }: PayloadAction<string>) {
      const productIndex = state.cart.findIndex(({ _id }) => _id === payload);

      const productTotalPrice =
        state.cart[productIndex].quantity * state.cart[productIndex].price;

      state.cart = state.cart.filter(({ _id }) => _id !== payload);

      state.totalPrice -= productTotalPrice;
    },

    clearCart(state) {
      state.cart = [];
      state.totalPrice = 0;
    },

    incrementProduct(state, { payload }: PayloadAction<string>) {
      const productIndex = state.cart.findIndex(({ _id }) => _id === payload);

      if (productIndex !== -1) {
        state.cart[productIndex].quantity += 1;

        state.totalPrice += state.cart[productIndex].price;
      }
    },

    decrementProduct(state, { payload }: PayloadAction<string>) {
      const productIndex = state.cart.findIndex(({ _id }) => _id === payload);

      if (productIndex !== -1 && state.cart[productIndex].quantity > 1) {
        state.totalPrice += state.cart[productIndex].price;
        state.cart[productIndex].quantity -= 1;
      }
    },
  },

  extraReducers: builder => {
    builder.addCase(makeOrderOperation.pending, state => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(makeOrderOperation.fulfilled, state => {
      state.loading = false;
    });

    builder.addCase(
      makeOrderOperation.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  clearCart,
  incrementProduct,
  decrementProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
