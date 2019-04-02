import { Action } from '@ngrx/store';

export enum SearchActionsTypes {
  GetData = '[Search] Get Data',
}

export class GetData implements Action {
  public readonly type = SearchActionsTypes.GetData;
}

/*export class GetUser implements Action {
  public readonly type = SearchActions.GetUser;
  constructor(public payload: number) {}
}*/

export type SearchActions = GetData;
