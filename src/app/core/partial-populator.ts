import { JSON_PROPERTY_METADATA_KEY, JsonPropertyContextConfiguration } from '@paddls/ts-serializer';

/**
 * PartialPopulator allow to instantiate child class with base JavaScript Object.
 * This class use existing JsonProperty to know which sub class will be instantiated.
 * If class already extends some other class, then just the parent needs to extend PartialPopulator.
 *
 * class Test extends PartialPopulator {
 *
 *   prop1: string;
 *
 *   @JsonProperty(() => SubTest)
 *   prop2: SubTest;
 *
 * }
 *
 * class SubTest extends PartialPopulator {
 *
 *   prop3: number;
 *
 *   @JsonProperty(() => SubTest)
 *   prop4?: SubTest;
 *
 * }
 *
 * Create a new Test & SubTest instance:
 *
 * const t: Test = new Test({
 *   prop1: 'prop1',
 *   prop2: {
 *     prop3: 3,
 *     prop4: {
 *       prop3: 3
 *     }
 *   }
 * });
 */
export abstract class PartialPopulator<T = any> {

  public constructor(obj?: Partial<T>) {
    const jsonProperties: JsonPropertyContextConfiguration<T, any>[] = Reflect.getMetadata(JSON_PROPERTY_METADATA_KEY, this) || [];

    Object.keys(obj || {}).forEach((attribute: string) => {
      // @ts-ignore
      if (!obj.hasOwnProperty(attribute)) {
        return;
      }

      const jsonProperty = jsonProperties.find((prop) => prop.field === attribute);
      // @ts-ignore
      if (Array.isArray(obj[attribute])) {
        // @ts-ignore
        this[attribute] = obj[attribute].map((item) => discriminateAttribute(item, jsonProperty));
      } else {
        // @ts-ignore
        this[attribute] = discriminateAttribute(obj[attribute], jsonProperty);
      }
    });
  }
}

function discriminateAttribute(item: any, jsonProperty: any) {
  if (typeof item === 'object' && jsonProperty?.type && !Array.isArray(jsonProperty?.type()) && item) {
    // @ts-ignore
    return new (jsonProperty.type())(item);
  } else {
    // @ts-ignore
    return item;
  }
}
