import { IOrder, IState } from "../../types/redux/redux-types";

export const getOrdersHistorySelector = (state: IState): IOrder[] | null =>
  state.orderHistory.ordersHistory;

export const getOrdersHistoryLoadingStatusSelector = (state: IState): boolean =>
  state.orderHistory.loading;

export const getOrdersHistoryErrorStatusSelector = (state: IState): any =>
  state.orderHistory.error;
