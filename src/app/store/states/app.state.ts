import { initialSearchState, SearchQueryState } from '@store/states/search.state';

export interface AppState {
  search: SearchQueryState;
}

export const initialAppState: AppState = {
  search: initialSearchState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
