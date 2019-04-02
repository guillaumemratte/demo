import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule
} from '@angular/material';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
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
    MatInputModule,
    HeaderComponent
  ]
})
export class SharedModule { }
