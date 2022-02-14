import { Converter } from '@paddls/ts-serializer';
import dayjs, { Dayjs } from 'dayjs';

export class DayjsDateConverter implements Converter<Dayjs, string> {

  fromJson(date: string): Dayjs {
    if (!date) {
      return null;
    }

    return dayjs(date);
  }

  toJson(date: Dayjs): string {
    if (!date) {
      return null;
    }

    return date.format('YYYY-MM-DD');
  }

}
