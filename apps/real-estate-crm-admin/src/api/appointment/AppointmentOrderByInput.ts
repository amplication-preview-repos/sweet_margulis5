import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  notes?: SortOrder;
  propertyId?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
