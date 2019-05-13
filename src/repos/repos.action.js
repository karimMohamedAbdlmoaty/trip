import { SELECT_REPO, LOAD_REPOS } from './repos.type';


/**
 * @param actionName {object}
 * @return {object} the three async object actions
 */

export const buildAsyncActions = (actionName) => ({
  request: () => ({
    type: actionName.PENDING,
  }),
  failure: (error) => ({
    type: actionName.ERROR,
    error
  }),
  success: (data) => ({
    type: actionName.SUCCESS,
    data
  }),
});

// Actions
export const receiveRepos = buildAsyncActions(LOAD_REPOS);

// Actions
export const selectRepo = (id) => {
  return {
    type: SELECT_REPO,
    id
  };
};

// Async actions
export const fetchData = (endpoint, fetchAction) => async (dispatch) => {
  try {
    dispatch(fetchAction.request());
    const response = await fetch(endpoint);
    const responseJson = await response.json();
    dispatch(fetchAction.success(responseJson.items));
  } catch (error) {
    dispatch(fetchAction.failure(error));
  }
};