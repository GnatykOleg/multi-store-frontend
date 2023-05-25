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

const { PERSIST_KEY, SLICE_STATE_KEY_COMPANIES } = REDUX_CONSTANTS;

export const persistConfig = {
  key: PERSIST_KEY,

  storage,

  // Add later!
  // whitelist: [],

  blacklist: ["_persist", SLICE_STATE_KEY_COMPANIES],
};

export const middlewareConfig = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};
