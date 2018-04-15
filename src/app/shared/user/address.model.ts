import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Address {

  @JsonProperty('city', String)
  city: string | undefined = undefined;

  @JsonProperty('department', Number)
  department: number | undefined = undefined;

}
