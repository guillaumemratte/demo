import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchQueryParam} from '@models/search.interface';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(query: string): Observable<any> {
    return this.http.get(`${environment.api.endpoint}${environment.api.paths.getProducts}`);
  }

  private formatQuery(queryParams: SearchQueryParam): string {
    return '';
  }
}
