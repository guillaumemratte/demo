import { Search } from '@models/search.interface';

export interface SearchQueryState {
  params: Search;
}

export const initialSearchState: SearchQueryState = {
  params: null,
};
