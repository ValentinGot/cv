import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cv-loading-snack-bar',
  template: `
    <mat-spinner diameter="20"></mat-spinner>
    {{ 'app.loading' | transloco }}...
  `,
  styleUrls: ['./loading-snack-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSnackBarComponent { }
