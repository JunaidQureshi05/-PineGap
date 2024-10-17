import { CustomerDetailType } from "../customer";

export type ReduxStoreStateType = {
  customers: CustomerDetailType[];
  selectedCustomer: CustomerDetailType | null;
};

export enum API_STATUS {
  default = "default",
  in_progress = "started",
  success = "done",
  failure = "failed",
}
