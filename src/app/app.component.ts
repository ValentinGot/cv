import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly iconRegistry: MatIconRegistry
  ) { }

  ngOnInit() {
    this.registerLangIcons();
    this.registerSocialIcons();
    this.registerTechIcons();
  }

  private registerLangIcons() {
    this.registerIcons('flag', [
      'fr',
      'gb'
    ]);
  }

  private registerSocialIcons() {
    this.registerIcons('social', [
      'flickr',
      'github',
      'linkedin',
      'twitter'
    ]);
  }

  private registerTechIcons() {
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
      'webpack',
      'seo',
      'a11y',
      'rxjs'
    ]);
  }

  private registerIcons(namespace: string, icons: string[]) {
    for (const icon of icons) {
      this.iconRegistry.addSvgIconInNamespace(
        namespace,
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/${namespace}/${icon}.svg`)
      );
    }
  }


}
