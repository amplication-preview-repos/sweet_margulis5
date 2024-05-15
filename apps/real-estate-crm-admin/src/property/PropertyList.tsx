import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PropertyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Properties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="address" source="address" />
        <TextField label="areaSize" source="areaSize" />
        <TextField label="availabilityStatus" source="availabilityStatus" />
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="listingPrice" source="listingPrice" />
        <TextField label="price" source="price" />
        <TextField label="propertyCategory" source="propertyCategory" />
        <TextField label="propertyType" source="propertyType" />
        <TextField label="size" source="size" />
        <TextField label="status" source="status" />
        <TextField label="streetAddress" source="streetAddress" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
