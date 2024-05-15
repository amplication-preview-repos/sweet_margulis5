/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumClientPreferredContactMethod } from "./EnumClientPreferredContactMethod";

@InputType()
class ClientUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AppointmentUpdateManyWithoutClientsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentUpdateManyWithoutClientsInput)
  @IsOptional()
  @Field(() => AppointmentUpdateManyWithoutClientsInput, {
    nullable: true,
  })
  appointments?: AppointmentUpdateManyWithoutClientsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumClientPreferredContactMethod,
  })
  @IsEnum(EnumClientPreferredContactMethod)
  @IsOptional()
  @Field(() => EnumClientPreferredContactMethod, {
    nullable: true,
  })
  preferredContactMethod?: "Option1" | null;
}

export { ClientUpdateInput as ClientUpdateInput };
