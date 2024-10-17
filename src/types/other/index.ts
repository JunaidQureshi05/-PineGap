import { CustomerDetailType } from "../customer";

export type ReduxStoreStateType = {
  customers: CustomerDetailType[];
  selectedCustomer: CustomerDetailType | null;
};

export type SetSelectedCustomerActionType = {
  payload: {
    id: number;
  };
};

export enum API_STATUS {
  default = "default",
  in_progress = "started",
  success = "done",
  failure = "failed",
}
