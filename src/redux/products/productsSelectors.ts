import { IProduct, IState } from "../../types/redux/redux-types";

export const getProductsForCompanySelector = (
  state: IState
): IProduct[] | null => state.productsState.products;

export const getProductsLoadingStatusSelector = (state: IState): boolean =>
  state.productsState.loading;

export const getProductsErrorStatusSelector = (state: IState): any =>
  state.productsState.error;
