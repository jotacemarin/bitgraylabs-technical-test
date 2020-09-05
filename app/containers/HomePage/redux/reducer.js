import { fromJS } from 'immutable';

import { TOGGLE_VIEW } from './constants';

export const initialState = fromJS({
  gridView: false,
});

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_VIEW:
      return state.set('gridView', payload.isGrid);
    default:
      return state;
  }
}
