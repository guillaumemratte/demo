import { SearchState, initialSearchState } from '@store/states/search.state';
import { SearchActions } from '@store/actions/search.actions';

export const searchReducers = (
  state = initialSearchState,
  action: SearchActions
  ): SearchState => {
    switch (action.type) {
      default:
        return state;
    }
};
