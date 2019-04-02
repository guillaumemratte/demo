import { SearchQueryState, initialSearchState } from '@store/states/search.state';
import { SearchActions } from '@store/actions/search.actions';

export const searchReducers = (
  state = initialSearchState,
  action: SearchActions
  ): SearchQueryState => {
    switch (action.type) {
      default:
        return state;
    }
};
