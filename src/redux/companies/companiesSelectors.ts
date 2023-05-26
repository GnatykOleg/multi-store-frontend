import { ICompany, IState } from "../../types/redux/redux-types";

export const getAllCompaniesSelector = (state: IState): ICompany[] | null =>
  state.companiesState.companies;

export const getCompaniesLoadingStatusSelector = (state: IState): boolean =>
  state.companiesState.loading;

export const getCompaniesErrorStatusSelector = (state: IState): any =>
  state.companiesState.error;
