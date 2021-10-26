import dayjs from 'dayjs';
import { PersonalInformation } from './personal-information.model';

describe('PersonalInformation', () => {

  describe('#age', () => {

    it(`should return 'null' if 'birthDate' is empty`, () => {
      const personalInformation = new PersonalInformation();
      personalInformation.birthDate = null;

      expect(personalInformation.age).toEqual(null);
    });

    it(`should return the age if 'birthDate' is not empty`, () => {
      const personalInformation = new PersonalInformation();
      personalInformation.birthDate = dayjs().subtract(30, 'years');

      expect(personalInformation.age).toEqual(30);
    });

  });

});
