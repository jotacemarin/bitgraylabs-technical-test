import { fromJS } from 'immutable';

import { DEFAULT_ACTION } from './constants';

export const initialState = fromJS({
  default: false,
});

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  if (type === DEFAULT_ACTION) {
    return state.set('default', payload.default);
  }
  return state;
}
