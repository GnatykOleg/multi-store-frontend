import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import { REDUX_CONSTANTS } from "../../helpers/constants/redux-constants";

const {
  PERSIST_KEY,
  STATE_KEY_COMPANIES,
  STATE_KEY_PRODUCTS,
  STATE_KEY_CART,
  STATE_KEY_ORDERS_HISTORY,
} = REDUX_CONSTANTS;

export const persistConfig = {
  key: PERSIST_KEY,

  storage,

  whitelist: [STATE_KEY_CART],

  blacklist: [
    "_persist",
    STATE_KEY_COMPANIES,
    STATE_KEY_PRODUCTS,
    STATE_KEY_ORDERS_HISTORY,
  ],
};

export const middlewareConfig = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};
