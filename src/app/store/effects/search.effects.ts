import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import {AppState} from '@store/states/app.state';
import {ProductService} from '@shared/services/product.service';

@Injectable()
export class SearchEffects {

  /*@Effect()
  getData$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),

    switchMap(() => this.productService.getProducts('test')),
  );

  constructor(
    private productService: ProductService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}*/
}
