import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Appointment = {
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  location: string | null;
  notes: string | null;
  property?: Property | null;
  time: Date | null;
  updatedAt: Date;
};
