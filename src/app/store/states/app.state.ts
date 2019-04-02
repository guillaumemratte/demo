import { initialSearchState, SearchState } from '@store/states/search.state';

export interface AppState {
  search: SearchState;
}

export const initialAppState: AppState = {
  search: initialSearchState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
