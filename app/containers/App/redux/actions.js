import { SET_LOADING, SET_RESPONSE, RESET_RESPONSE } from './constants';

export const setLoading = isLoading => ({
  type: SET_LOADING,
  payload: { isLoading },
});

export const setResponse = (type = false, title = false, message = false) => ({
  type: SET_RESPONSE,
  payload: { type, title, message },
});

export const resetResponse = () => ({ type: RESET_RESPONSE });
