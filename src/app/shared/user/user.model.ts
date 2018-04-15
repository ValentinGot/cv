import { JsonObject, JsonProperty } from 'json2typescript';

import { DateConverter } from '../date.converter';

@JsonObject
export class Address {

  @JsonProperty('city', String)
  city: string | undefined = undefined;

  @JsonProperty('department', Number)
  department: number | undefined = undefined;

}

@JsonObject
export class User {

  @JsonProperty('photo', String)
  photo: string | undefined = undefined;

  @JsonProperty('firstName', String)
  firstName: string | undefined = undefined;

  @JsonProperty('lastName', String)
  lastName: string | undefined = undefined;

  @JsonProperty('job', String)
  job: string | undefined = undefined;

  @JsonProperty('birthDate', DateConverter)
  birthDate: Date | undefined = undefined;

  @JsonProperty('address', Address)
  address: Address | undefined = undefined;

  @JsonProperty('email', String)
  email: string | undefined = undefined;

  get age (): number {
    const ageDiff = Date.now() - this.birthDate.getTime();
    const ageDate = new Date(ageDiff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
