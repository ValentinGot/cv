import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Skill {

  @JsonProperty('icon', String)
  icon: string | undefined = undefined;

  @JsonProperty('name', String)
  name: string | undefined = undefined;

  @JsonProperty('level', Number)
  level: number | undefined = undefined;

  @JsonProperty('main', Boolean)
  main: boolean | undefined = undefined;

}
