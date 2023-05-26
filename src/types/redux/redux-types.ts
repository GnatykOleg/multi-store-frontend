import { REDUX_CONSTANTS } from "../../helpers/constants/redux-constants";

const {
  SLICE_STATE_KEY_COMPANIES,
  SLICE_STATE_KEY_PRODUCTS,
  SLICE_STATE_KEY_CART,
  SLICE_STATE_KEY_ERROR,
  SLICE_STATE_KEY_LOADING,
  SLICE_STATE_KEY_TOTAL_PRICE,
  STATE_KEY_COMPANIES,
  STATE_KEY_PRODUCTS,
  STATE_KEY_CART,
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

export interface IOrder {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  adress: string;
  total_price: number;
  orders: IProduct[];
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

export interface ICartSliceInitialState extends ICommonSliceState {
  [SLICE_STATE_KEY_CART]: IProduct[];
  [SLICE_STATE_KEY_TOTAL_PRICE]: number;
}

export interface IState {
  [STATE_KEY_COMPANIES]: ICompaniesSliceInitialState;
  [STATE_KEY_PRODUCTS]: IProductsSliceInitialState;
  [STATE_KEY_CART]: ICartSliceInitialState;
}
