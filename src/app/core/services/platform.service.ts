import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CoreServiceModule } from '../core-service.module';

@Injectable({
  providedIn: CoreServiceModule
})
export class PlatformService {
  static service: PlatformService | undefined = undefined;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {
    PlatformService.service = this;
  }

  isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  isPlatformServer() {
    return isPlatformServer(this.platformId);
  }

}
