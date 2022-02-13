import dayjs from 'dayjs';
import { DayjsDateConverter } from './dayjs-date.converter';

describe('DayjsDateConverter', () => {
  let converter: DayjsDateConverter;

  beforeEach(() => {
    converter = new DayjsDateConverter();
  });

  describe('#fromJson', () => {

    it(`should return "null" when there is no date`, () => {
      expect(converter.fromJson(null)).toEqual(null);
    });

    it(`should return a new instance of Day.js when there is a date`, () => {
      expect(converter.fromJson('1450-01-12')).toEqual(dayjs('1450-01-12'));
    });

  });

  describe('#toJson', () => {

    it(`should return "null" when there is no date`, () => {
      expect(converter.toJson(null)).toEqual(null);
    });

    it(`should return a date formatted to YYYY-MM-DD when there is a date`, () => {
      expect(converter.toJson(dayjs('1450-01-12'))).toEqual('1450-01-12');
    });

  });

});
