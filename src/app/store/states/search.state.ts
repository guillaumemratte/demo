import {QueryParam, SearchParams, sortingTypes} from '@models/search.interface';

export interface SearchState {
  searchParams: SearchParams;
  queryParams: QueryParam;
}

export const initialSearchState: SearchState = {
  searchParams: null,
  queryParams: {
    term: '',
    sorting: sortingTypes.RELEVANCE,
    category: 1,
  },
};
