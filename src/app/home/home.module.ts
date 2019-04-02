import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '@app/home/home.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
