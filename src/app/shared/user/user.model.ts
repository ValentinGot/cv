import { JsonObject, JsonProperty } from 'json2typescript';

import { DateConverter } from '../../core/date.converter';
import { Address } from './address.model';
import { Social } from './social.model';

@JsonObject
export class User {

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

  @JsonProperty('socials', [ Social ])
  socials: Social[] | undefined = undefined;

  get age (): number {
    const ageDiff = Date.now() - this.birthDate.getTime();
    const ageDate = new Date(ageDiff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
