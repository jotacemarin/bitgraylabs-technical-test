import { fromJS } from 'immutable';

import { SHOW_MODAL } from './constants';

export const initialState = fromJS({
  showModal: false,
  url: false,
});

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  if (type === SHOW_MODAL) {
    return state.set('showModal', payload.showModal).set('url', payload.url);
  }
  return state;
}
