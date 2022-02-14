import { JsonProperty } from '@paddls/ts-serializer';
import dayjs, { Dayjs } from 'dayjs';
import { DayjsDateConverter } from '../converters/dayjs-date.converter';
import { Address } from './address.model';
import { Social } from './social.model';

export class PersonalInformation {

  @JsonProperty()
  firstName: string;

  @JsonProperty()
  lastName: string;

  @JsonProperty()
  jobTitle: string;

  @JsonProperty({ customConverter: () => DayjsDateConverter })
  birthDate: Dayjs;

  @JsonProperty(() => Address)
  address: Address;

  @JsonProperty()
  email: string;

  @JsonProperty()
  about: string;

  @JsonProperty(() => Social)
  socials: Social[];

  get age(): number | null {
    if (!this.birthDate) {
      return null;
    }

    return dayjs().diff(this.birthDate, 'years');
  }

}
