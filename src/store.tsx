import { configureStore } from "@reduxjs/toolkit";
import addFormReducer from "./slices/addFormSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  addOrderForm: addFormReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["navigation"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  // reducer: { addOrderForm: addFormReducer },
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
