import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./reducers/customerReducer";

export const store = configureStore({
  reducer: {
    customerData: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
