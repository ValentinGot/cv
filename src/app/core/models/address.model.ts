import { JsonProperty } from '@paddls/ts-serializer';

export class Address {

  @JsonProperty()
  city: string;

  @JsonProperty()
  department: number;

}
