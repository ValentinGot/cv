import { JsonProperty } from '@paddls/ts-serializer';
import { PartialPopulator } from '../partial-populator';

export class Technology extends PartialPopulator<Technology> {

  @JsonProperty()
  icon: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  url: string;

}
