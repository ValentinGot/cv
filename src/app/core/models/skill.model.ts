import { JsonProperty } from '@witty-services/ts-serializer';
import { PartialPopulator } from '../partial-populator';

export interface SkillResponse {
  lang: string;
  skills: Skill[];
}

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
