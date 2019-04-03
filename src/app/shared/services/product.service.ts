import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpSearchParams } from '@models/search.interface';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(params: HttpSearchParams): Observable<any> {
    const httpHeaders = new HttpHeaders(
      {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'access-control-allow-credentials': 'true'
      }
    );

    return this.http.get(
      `${environment.api.proxy}${environment.api.endpoint}${environment.api.paths.getProducts}?currentPage=0&pageSize=10&query`,
      {
        headers: httpHeaders
      }
    );
  }
}
