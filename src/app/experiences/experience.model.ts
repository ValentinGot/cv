import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Technology {

  @JsonProperty('icon', String)
  icon: string | undefined = undefined;

  @JsonProperty('name', String)
  name: string | undefined = undefined;

  @JsonProperty('url', String, true)
  url: string | undefined = undefined;

}

@JsonObject
export class Experience {

  @JsonProperty('order', Number)
  order: number | undefined = undefined;

  @JsonProperty('name', String)
  name: string | undefined = undefined;

  @JsonProperty('time', String)
  time: string | undefined = undefined;

  @JsonProperty('location', String)
  location: string | undefined = undefined;

  @JsonProperty('description', String)
  description: string | undefined = undefined;

  @JsonProperty('technologies', [ Technology ])
  technologies: Technology[] | undefined = undefined;

}
