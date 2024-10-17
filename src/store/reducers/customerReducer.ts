import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customers } from "../../data/customers";
import { CustomerDetailType } from "../../types/customer";
import { ReduxStoreStateType } from "../../types/other";

const initialState: ReduxStoreStateType = {
  customers: Customers,
  selectedCustomer: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setSelectedCustomer: (state, action: PayloadAction<{ id: number }>) => {
      console.log("Available customers:", state.customers);
      const { id } = action.payload;

      const customer = state.customers.find((cust) => cust.id === id);

      if (customer) {
        state.selectedCustomer = customer;
      }
    },
  },
});

// Export the actions
export const { setSelectedCustomer } = customerSlice.actions;

// Export the reducer
export default customerSlice.reducer;
