import {QueryParam, HttpSearchParams, sortingTypes} from '@models/search.interface';

export interface SearchState {
  httpSearchParams: HttpSearchParams;
  queryParams: QueryParam;
}

export const initialSearchState: SearchState = {
  httpSearchParams: {
    query: '',
    currentPage: 0,
    pageSize: 20,
  },
  queryParams: {
    term: '',
    sorting: sortingTypes.RELEVANCE,
    category: 1,
  },
};
