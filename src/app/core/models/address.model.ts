import { JsonProperty } from '@witty-services/ts-serializer';

export class Address {

  @JsonProperty()
  city: string;

  @JsonProperty()
  department: number;

}
