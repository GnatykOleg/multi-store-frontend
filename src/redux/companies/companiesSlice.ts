import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { REDUX_CONSTANTS } from "../../helpers/constants/redux-constants";

import {
  ICompaniesSliceInitialState,
  ICompany,
} from "../../types/redux/redux-types";

import { getAllCompaniesOperation } from "./companiesOperations";

const {
  SLICE_STATE_KEY_COMPANIES,
  SLICE_STATE_KEY_ERROR,
  SLICE_STATE_KEY_LOADING,
} = REDUX_CONSTANTS;

const initialState: ICompaniesSliceInitialState = {
  [SLICE_STATE_KEY_COMPANIES]: null,
  [SLICE_STATE_KEY_LOADING]: false,
  [SLICE_STATE_KEY_ERROR]: null,
};

const companiesSlice = createSlice({
  name: SLICE_STATE_KEY_COMPANIES,

  initialState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(getAllCompaniesOperation.pending, state => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getAllCompaniesOperation.fulfilled,
      (state, { payload }: PayloadAction<ICompany[]>) => {
        state.companies = payload;
        state.loading = false;
      }
    );

    builder.addCase(
      getAllCompaniesOperation.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export default companiesSlice.reducer;
