import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { default as serverDataReducer } from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ serverData: serverDataReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
