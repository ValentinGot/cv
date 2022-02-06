import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule } from '@ngneat/transloco';
import { LoadingSnackBarComponent } from './loading-snack-bar/loading-snack-bar.component';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    LoadingSnackBarComponent
  ],
  exports: [
    LoadingSnackBarComponent
  ]
})
export class SharedModule { }
