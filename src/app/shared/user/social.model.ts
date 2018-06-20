import { JsonObject, JsonProperty } from 'json2typescript';

export enum SocialType {
  TWITTER = 'twitter',
  LINKED_IN = 'linkedin',
  GITHUB = 'github',
  FLICKR = 'flickr'
}

@JsonObject
export class Social {

  @JsonProperty('type', String)
  type: SocialType | undefined = undefined;

  @JsonProperty('url', String)
  url: string | undefined = undefined;

  get icon () {
    return `social:${this.type}`;
  }

  get aria () {
    switch (this.type) {
      case SocialType.TWITTER:
        return 'Twitter';

      case SocialType.LINKED_IN:
        return 'LinkedIn';

      case SocialType.GITHUB:
        return 'GitHub';

      case SocialType.FLICKR:
        return 'Flickr';
    }
  }

}
