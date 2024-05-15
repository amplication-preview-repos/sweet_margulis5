import { Property } from "../property/Property";

export type AgentAssignment = {
  agentName: string | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  property?: Property | null;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
