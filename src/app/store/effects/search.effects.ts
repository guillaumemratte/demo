import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { switchMap, concatMap, map, withLatestFrom, mergeMap } from 'rxjs/operators';
import {AppState} from '@store/states/app.state';
import {ProductService} from '@shared/services/product.service';
import {GetData, GetDataSuccess, SearchActionsTypes} from '@store/actions/search.actions';

@Injectable()
export class SearchEffects {

  @Effect()
  getData$ = this.actions$.pipe(
    ofType<GetData>(SearchActionsTypes.GetData),
    withLatestFrom(this.store.pipe(select('search'))),
    concatMap(([action, search]) => {
      return this.productService.getProducts(search.httpSearchParams)
        .pipe(
          map((response) => {
            return new GetDataSuccess(response);
          })
        );
    })
  );

  constructor(
    private productService: ProductService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}
}
