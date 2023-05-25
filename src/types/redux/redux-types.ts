import { REDUX_CONSTANTS } from "../../helpers/constants/redux-constants";

const {
  SLICE_STATE_KEY_COMPANIES,
  SLICE_STATE_KEY_ERROR,
  SLICE_STATE_KEY_LOADING,
  STATE_KEY_COMPANIES,
} = REDUX_CONSTANTS;

export interface ICompany {
  _id: string;
  company_name: string;
  logo: string;
}

export interface ICompaniesSliceInitialState {
  [SLICE_STATE_KEY_COMPANIES]: null | ICompany[];
  [SLICE_STATE_KEY_LOADING]: boolean;
  [SLICE_STATE_KEY_ERROR]: any;
}

export interface IState {
  [STATE_KEY_COMPANIES]: ICompaniesSliceInitialState;
}
