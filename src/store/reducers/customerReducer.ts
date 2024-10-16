import { createSlice } from "@reduxjs/toolkit";
import { Customers } from "../../data/customers";

const initialState = {
  customers: Customers,
  selectedCustomer: null,
};

export const customerReducer = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setSelectedCustomer: (state: any, action: any): any => {
      console.log("Available customers:", state.customers);
      debugger;
      const id = action?.payload?.id;

      const customer = state.customers[id];
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
