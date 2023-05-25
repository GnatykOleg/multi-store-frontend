import { REDUX_CONSTANTS } from "../../helpers/constants/redux-constants";

const {
  SLICE_STATE_KEY_COMPANIES,
  SLICE_STATE_KEY_PRODUCTS,
  SLICE_STATE_KEY_ERROR,
  SLICE_STATE_KEY_LOADING,
  STATE_KEY_COMPANIES,
  STATE_KEY_PRODUCTS,
} = REDUX_CONSTANTS;

export interface ICompany {
  _id: string;
  company_name: string;
  logo: string;
}

export interface IProduct {
  _id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  company_id: string;
}

interface ICommonSliceState {
  [SLICE_STATE_KEY_LOADING]: boolean;
  [SLICE_STATE_KEY_ERROR]: any;
}

export interface ICompaniesSliceInitialState extends ICommonSliceState {
  [SLICE_STATE_KEY_COMPANIES]: null | ICompany[];
}

export interface IProductsSliceInitialState extends ICommonSliceState {
  [SLICE_STATE_KEY_PRODUCTS]: null | IProduct[];
}

export interface IState {
  [STATE_KEY_COMPANIES]: ICompaniesSliceInitialState;
  [STATE_KEY_PRODUCTS]: IProductsSliceInitialState;
}
