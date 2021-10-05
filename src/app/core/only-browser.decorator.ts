import { PlatformService } from './services/platform.service';

export function OnlyBrowser(overrideFct: (...args: any[]) => any = () => {}) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    // Don't use an arrow function to keep parent's `this`
    descriptor.value = function(...args: any[]) {
      if (PlatformService.service && PlatformService.service.isPlatformServer()) {
        return overrideFct.apply(this, args);
      }

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

