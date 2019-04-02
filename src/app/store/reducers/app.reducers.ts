import {ActionReducerMap, MetaReducer} from '@ngrx/store';

import { AppState } from '@store/states/app.state';
import { searchReducers } from '@store/reducers/search.reducers';


export const appReducers: ActionReducerMap<AppState, any> = {
  search: searchReducers
};

export const metaReducers: MetaReducer<AppState>[] = [];
