import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cv-loading-snackbar',
  template: `
    <mat-spinner diameter="20"></mat-spinner>
    {{ 'app.loading' | translate }}...
  `,
  styleUrls: ['./loading-snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSnackBarComponent { }
