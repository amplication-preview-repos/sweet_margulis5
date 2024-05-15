import { AgentAssignment } from "../agentAssignment/AgentAssignment";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  agentAssignments?: Array<AgentAssignment>;
  appointments?: Array<Appointment>;
  areaSize: number | null;
  availabilityStatus: string | null;
  category: string | null;
  createdAt: Date;
  id: string;
  listingPrice: number | null;
  price: number | null;
  propertyCategory: string | null;
  propertyType: string | null;
  size: number | null;
  status: string | null;
  streetAddress: string | null;
  updatedAt: Date;
};
