import { JsonProperty } from '@paddls/ts-serializer';
import { PartialPopulator } from '../partial-populator';

export class Career extends PartialPopulator<Career> {

  @JsonProperty()
  name: string;

  @JsonProperty()
  subtitle: string;

  @JsonProperty()
  duration: string;

}
