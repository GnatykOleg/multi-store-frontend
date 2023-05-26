import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";

import persistStore from "redux-persist/es/persistStore";

import { middlewareConfig, persistConfig } from "../persist/configuration";

import { REDUX_CONSTANTS } from "../../helpers/constants/redux-constants";

import companiesSlice from "../companies/companiesSlice";

import productsSlice from "../products/productsSlice";

import cartSlice from "../cart/cartSlice";

const { STATE_KEY_COMPANIES, STATE_KEY_PRODUCTS, STATE_KEY_CART } =
  REDUX_CONSTANTS;

const rootReducer = combineReducers({
  [STATE_KEY_COMPANIES]: companiesSlice,
  [STATE_KEY_PRODUCTS]: productsSlice,
  [STATE_KEY_CART]: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(middlewareConfig),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
