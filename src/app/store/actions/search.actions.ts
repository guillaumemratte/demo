import { Action } from '@ngrx/store';

export enum SearchActionsTypes {
  UpdateSearchParams = '[Search] Update Search Params',
  GetData = '[Search] Get Data',
  GetDataSuccess = '[Search] Get Data Success',
}

export class GetData implements Action {
  public readonly type = SearchActionsTypes.GetData;
}

export class GetDataSuccess implements Action {
  public readonly type = SearchActionsTypes.GetDataSuccess;
  constructor(public payload: any) {}
}

export class UpdateSearchParams implements Action {
  public readonly type = SearchActionsTypes.UpdateSearchParams;
}

export type SearchActions = GetData | GetDataSuccess | UpdateSearchParams;
