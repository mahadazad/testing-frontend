export const UPDATE_SEARCH_FIELD = 'home/UPDATE_SEARCH_FIELD';

export const updateSearchField = (searchKeyword: string) => ({
  type: UPDATE_SEARCH_FIELD,
  searchKeyword,
});
