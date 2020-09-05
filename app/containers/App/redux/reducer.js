import { fromJS } from 'immutable';

import { SET_LOADING, SET_RESPONSE, RESET_RESPONSE } from './constants';

export const initialState = fromJS({
  loading: false,
  response: {
    type: false,
    message: false,
  },
});

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return state.set('loading', payload.isLoading);
    case SET_RESPONSE:
      return state
        .set('loading', false)
        .setIn(['response', 'type'], payload.type)
        .setIn(['response', 'message'], payload.message);
    case RESET_RESPONSE:
      return state
        .set('loading', false)
        .setIn(['response', 'type'], false)
        .setIn(['response', 'message'], false);
    default:
      return state;
  }
}
