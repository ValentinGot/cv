import { Injectable } from '@angular/core';
import { CoreServiceModule } from '../core-service.module';
import { OnlyBrowser } from '../only-browser.decorator';

/**
 * A local storage service built on top of `window.localStorage`.
 * Handle SSR
 */
@Injectable({
  providedIn: CoreServiceModule
})
export class LocalStorage {
  public static PREFIX = `cv`;

  /**
   * Directly get a value from local storage.
   */
  @OnlyBrowser(() => null)
  get <T>(key: string): T | null {
    const item = localStorage.getItem(LocalStorage.getKey(key));

    if (!item) {
      return null;
    }

    try {
      return JSON.parse(item);
    } catch (e) {
      return null;
    }
  }

  /**
   * Directly adds a value to local storage.
   */
  @OnlyBrowser()
  set <T>(key: string, value: T): boolean {
    let storageValue: string | null;

    // Let's convert undefined values to null to get consistent values
    if (value === undefined) {
      storageValue = null;
    } else {
      storageValue = JSON.stringify(value);
    }

    try {
      localStorage.setItem(LocalStorage.getKey(key), storageValue as string);
    } catch (e) {
      return false;
    }

    return true;
  }

  /**
   * Remove an item from local storage by key.
   */
  @OnlyBrowser()
  remove(key: string): void {
    localStorage.removeItem(LocalStorage.getKey(key));
  }

  /**
   * Retrieve the full key
   */
  private static getKey(key: string): string {
    return `${LocalStorage.PREFIX}.${key}`;
  }

}
