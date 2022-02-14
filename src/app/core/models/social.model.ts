import { JsonProperty } from '@paddls/ts-serializer';
import { SocialType } from './social-type.enum';

export class Social {

  @JsonProperty()
  type: SocialType;

  @JsonProperty()
  url: string;

  get icon() {
    return `social:${this.type}`;
  }

  get aria() {
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
