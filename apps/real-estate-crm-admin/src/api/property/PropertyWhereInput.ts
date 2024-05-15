import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agentAssignments?: AgentAssignmentListRelationFilter;
  appointments?: AppointmentListRelationFilter;
  areaSize?: IntNullableFilter;
  availabilityStatus?: StringNullableFilter;
  category?: StringNullableFilter;
  id?: StringFilter;
  listingPrice?: FloatNullableFilter;
  price?: FloatNullableFilter;
  propertyCategory?: StringNullableFilter;
  propertyType?: StringNullableFilter;
  size?: IntNullableFilter;
  status?: StringNullableFilter;
  streetAddress?: StringNullableFilter;
};
