import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Training {

  @JsonProperty('year', Number)
  year: number | undefined = undefined;

  @JsonProperty('name', String)
  name: string | undefined = undefined;

  @JsonProperty('subtitle', String, true)
  subTitle?: string | undefined = undefined;

}
