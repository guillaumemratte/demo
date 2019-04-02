import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    TranslateModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  exports: [
    TranslateModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
