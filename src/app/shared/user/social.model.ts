import { JsonObject, JsonProperty } from 'json2typescript';

export enum SocialType {
  TWITTER = 'twitter',
  LINKED_IN = 'linkedin-in',
  GITHUB = 'github',
  FLICKR = 'flickr'
}

@JsonObject
export class Social {

  @JsonProperty('type', String)
  type: SocialType | undefined = undefined;

  @JsonProperty('url', String)
  url: string | undefined = undefined;

}
