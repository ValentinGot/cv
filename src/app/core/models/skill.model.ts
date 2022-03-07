import { JsonProperty } from '@paddls/ts-serializer';
import { PartialPopulator } from '../partial-populator';

export class Skill extends PartialPopulator<Skill> {

  @JsonProperty()
  icon: string;

  @JsonProperty()
  name: string;

  @JsonProperty()
  level: number;

  @JsonProperty()
  main: boolean;

}
