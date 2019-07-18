import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { TranslateService } from '@ngx-translate/core';

import { LangService } from './core/lang/lang.service';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor (
    private langService: LangService,
    private translate: TranslateService,
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry
  ) { }

  ngOnInit () {
    this.i18nConfiguration();
    this.registerLangIcons();
    this.registerSocialIcons();
    this.registerTechIcons();
  }

  private i18nConfiguration (): void {
    this.translate.setDefaultLang(LangService.DEFAULT_LANG);
    this.translate.use(LangService.DEFAULT_LANG);
  }

  private registerLangIcons (): void {
    this.registerIcons('flag', [
      'fr',
      'gb'
    ]);
  }

  private registerSocialIcons (): void {
    this.registerIcons('social', [
      'flickr',
      'github',
      'linkedin',
      'twitter'
    ]);
  }

  private registerTechIcons (): void {
    this.registerIcons('tech', [
      'javascript',
      'typescript',
      'css',
      'angular',
      'nodejs',
      'responsive',
      'ux',
      'git',
      'sass',
      'vuejs',
      'mongodb',
      'sails',
      'webstorm',
      'webrtc',
      'svn',
      'clea',
      'pwa',
      'd3js',
      'sublimetext',
      'less',
      'zend',
      'php',
      'webpack'
    ]);
  }

  private registerIcons (namespace: string, icons: string[]): void {
    for (const icon of icons) {
      this.iconRegistry.addSvgIconInNamespace(
        namespace,
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/${namespace}/${icon}.svg`)
      );
    }
  }

}
