import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";

import persistStore from "redux-persist/es/persistStore";

import { middlewareConfig, persistConfig } from "../persist/configuration";

import companiesSlice from "../companies/companiesSlice";

import { REDUX_CONSTANTS } from "../../helpers/constants/redux-constants";

const { STATE_KEY_COMPANIES } = REDUX_CONSTANTS;

const rootReducer = combineReducers({
  [STATE_KEY_COMPANIES]: companiesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(middlewareConfig),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
