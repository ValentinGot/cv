import { NgModule } from '@angular/core';
import { NgxSerializerModule } from '@witty-services/ngx-serializer';

@NgModule({
  imports: [
    NgxSerializerModule.forRoot({
      normalizerConfiguration: {
        denormalizeNull: true,
        normalizeNull: true
      }
    })
  ],
  exports: [
    NgxSerializerModule
  ]
})
export class NgxSerializerTestingModule { }
