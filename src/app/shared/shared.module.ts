import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';

import { LoadingSnackBarComponent } from './loading-snackbar/loading-snackbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    TranslateModule.forChild()
  ],
  declarations: [
    LoadingSnackBarComponent
  ],
  entryComponents: [
    LoadingSnackBarComponent
  ]
})
export class SharedModule { }
