import { fromJS } from 'immutable';

import { SET_LOADING } from './constants';

export const initialState = fromJS({
  loading: false,
});

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return state.set('loading', payload.isLoading);
    default:
      return state;
  }
}
