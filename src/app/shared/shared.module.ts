import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
