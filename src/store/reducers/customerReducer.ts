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
      const { id } = action.payload;
      const customer = state.customers.find((cust) => cust.id === id);
      if (customer) {
        state.selectedCustomer = customer;
      }
    },
  },
});

export const { setSelectedCustomer } = customerSlice.actions;

export default customerSlice.reducer;
