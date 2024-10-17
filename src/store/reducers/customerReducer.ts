import { createSlice } from "@reduxjs/toolkit";
import { Customers } from "../../data/customers";
import { CustomerDetailType } from "../../types/customer";
import {
  ReduxStoreStateType,
  SetSelectedCustomerActionType,
} from "../../types/other";

const initialState: ReduxStoreStateType = {
  customers: Customers,
  selectedCustomer: null,
};

export const customerReducer = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setSelectedCustomer: (
      state: ReduxStoreStateType,
      action: SetSelectedCustomerActionType
    ): any => {
      console.log("Available customers:", state.customers);
      debugger;
      const id: number = action.payload.id;

      const customer: CustomerDetailType = state.customers[id];
      if (customer) {
        state.selectedCustomer = customer;
      }
    },
  },
});

// Export the actions
export const { setSelectedCustomer } = customerReducer.actions as any;

// Export the reducer
export default customerReducer.reducer;
