import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { AgentAssignmentTitle } from "../agentAssignment/AgentAssignmentTitle";
import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const PropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceArrayInput
          source="agentAssignments"
          reference="AgentAssignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AgentAssignmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="areaSize" source="areaSize" />
        <TextInput label="availabilityStatus" source="availabilityStatus" />
        <TextInput label="category" source="category" />
        <NumberInput label="listingPrice" source="listingPrice" />
        <NumberInput label="price" source="price" />
        <TextInput label="propertyCategory" source="propertyCategory" />
        <TextInput label="propertyType" source="propertyType" />
        <NumberInput step={1} label="size" source="size" />
        <TextInput label="status" source="status" />
        <TextInput label="streetAddress" source="streetAddress" />
      </SimpleForm>
    </Create>
  );
};
