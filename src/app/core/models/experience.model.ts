import { JsonProperty } from '@paddls/ts-serializer';
import { PartialPopulator } from '../partial-populator';
import { Technology } from './technology.model';

export interface ExperienceResponse {
  lang: string;
  experiences: Experience[];
}

export class Experience extends PartialPopulator<Experience> {

  @JsonProperty()
  order: number;

  @JsonProperty()
  name: string;

  @JsonProperty()
  description: string;

  @JsonProperty()
  company: string;

  @JsonProperty()
  duration: string;

  @JsonProperty(() => Technology)
  technologies: Technology[];

}
