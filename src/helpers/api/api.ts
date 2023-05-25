import axios, { AxiosResponse } from "axios";

import { ICompany, IProduct } from "../../types/redux/redux-types";

import { REDUX_CONSTANTS } from "../constants/redux-constants";

const { REACT_APP_BACKEND_BASE_URL } = process.env;

const { ENDPOINT_COMPANIES, ENDPOINT_PRODUCTS } = REDUX_CONSTANTS;

const instance = axios.create({ baseURL: REACT_APP_BACKEND_BASE_URL });

export const getAllCompaniesApiService = async () => {
  const { data }: AxiosResponse<ICompany[]> = await instance.get(
    ENDPOINT_COMPANIES
  );

  return data;
};

export const getProductsForCompanyApiService = async (id: string) => {
  const { data }: AxiosResponse<IProduct[]> = await instance.get(
    `${ENDPOINT_PRODUCTS}/${id}`
  );

  return data;
};
