import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agentName?: string | null;
  endDate?: Date | null;
  property?: PropertyWhereUniqueInput | null;
  startDate?: Date | null;
  status?: "Option1" | null;
};
