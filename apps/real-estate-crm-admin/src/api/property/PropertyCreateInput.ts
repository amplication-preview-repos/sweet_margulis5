import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
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
