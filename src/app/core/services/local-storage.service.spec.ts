import { TestBed } from '@angular/core/testing';
import { LocalStorage } from './local-storage.service';

describe('LocalStorage', () => {
  let service: LocalStorage;
  const TEST_KEY = 'kaamelott';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorage
      ]
    });
    service = TestBed.inject(LocalStorage);
  });

  describe('#get', () => {

    it(`should return "null" if the item was not found in the local storage`, () => {
      spyOn(localStorage, 'getItem').and.returnValue(undefined);

      expect(service.get(TEST_KEY)).toEqual(null);
    });

    it(`should return "null" if the found item is not a parseable JSON`, () => {
      spyOn(localStorage, 'getItem').and.returnValue('NOT A JSON');

      expect(service.get(TEST_KEY)).toEqual(null);
    });

    it(`should return the parsed item`, () => {
      spyOn(localStorage, 'getItem').and.returnValue('{ "name": "Karadoc" }');

      expect(service.get(TEST_KEY)).toEqual({ name: 'Karadoc' });
    });

  });

  describe('#set', () => {

    beforeEach(() => {
      localStorage.removeItem(`${LocalStorage.PREFIX}.${TEST_KEY}`);
    });

    it(`should store "null" instead of "undefined" for homogeneity`, () => {
      expect(service.set(TEST_KEY, undefined)).toEqual(true);
      expect(localStorage.getItem(`${LocalStorage.PREFIX}.${TEST_KEY}`)).toEqual('null');
    });

    it(`should stringify the JSON value before storing it`, () => {
      expect(service.set(TEST_KEY, { name: 'Provencal Le Gaulois' })).toEqual(true);
      expect(localStorage.getItem(`${LocalStorage.PREFIX}.${TEST_KEY}`)).toEqual('{"name":"Provencal Le Gaulois"}');
    });

    it(`should return FALSE if it failed to store the value`, () => {
      spyOn(localStorage, 'setItem').and.throwError('TEST');

      expect(service.set(TEST_KEY, null)).toEqual(false);
    });

  });

});
