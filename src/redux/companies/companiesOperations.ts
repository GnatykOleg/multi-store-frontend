import { createAsyncThunk } from "@reduxjs/toolkit";

import { REDUX_CONSTANTS } from "./../../helpers/constants/redux-constants";

import { ICompany } from "../../types/redux/redux-types";

import * as api from "../../helpers/api/api";

import { toast } from "react-toastify";

const { ACTION_NAME_COMPANIES } = REDUX_CONSTANTS;

export const getAllCompaniesOperation = createAsyncThunk<
  ICompany[],
  undefined,
  { rejectValue: string }
>(ACTION_NAME_COMPANIES, async (_, { rejectWithValue }) => {
  try {
    const users: ICompany[] = await api.getAllCompaniesApiService();

    return users;
  } catch (error: any) {
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});
