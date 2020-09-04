import { SET_LOADING } from './constants';

export const setLoading = isLoading => ({
  type: SET_LOADING,
  payload: { isLoading },
});
