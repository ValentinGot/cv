import { PartialPopulator } from '../partial-populator';

export class Lang extends PartialPopulator<Lang> {

  lang: string;

  flag: string;

  get i18nKey(): string {
    return `lang.${this.lang}`;
  }

}
