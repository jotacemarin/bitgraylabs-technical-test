import { TOGGLE_VIEW, GET_ISSUES } from './constants';

export const toggleView = isGrid => ({
  type: TOGGLE_VIEW,
  payload: { isGrid },
});

export const getIssues = (limit, offset, action) => ({
  type: GET_ISSUES,
  payload: { limit, offset },
  action,
});
