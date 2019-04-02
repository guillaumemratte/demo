import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    TranslateModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    TranslateModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
