import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  areaSize?: number | null;
  availabilityStatus?: string | null;
  category?: string | null;
  listingPrice?: number | null;
  price?: number | null;
  propertyCategory?: string | null;
  propertyType?: string | null;
  size?: number | null;
  status?: string | null;
  streetAddress?: string | null;
};
