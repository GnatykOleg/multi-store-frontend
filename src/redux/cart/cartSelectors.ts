import { IProduct, IState } from "../../types/redux/redux-types";

export const getCartDataSelector = (state: IState): IProduct[] =>
  state.cartState.cart;

export const getCartTotalPriceSelector = (state: IState): number =>
  state.cartState.totalPrice;

export const getCartLoadingStatusSelector = (state: IState): boolean =>
  state.cartState.loading;

export const getCartErrorStatusSelector = (state: IState): any =>
  state.cartState.error;
