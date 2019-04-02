export enum sortingTypes {
  RELEVANCE = 'relevance',
  PRICE_ASC = 'price-asc',
  PRICE_DESC= 'price-desc',
  NAME_ASC = 'name-asc',
  NAME_DESC= 'name-desc',
}

export interface SearchParams {
  query: string;
  currentPage: number;
  pageSize: number;
}

export interface QueryParam {
  term: string;
  sorting: sortingTypes;
  category: number;
}
