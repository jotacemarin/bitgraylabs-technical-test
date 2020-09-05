import reducer, { initialState } from '../reducer';

import { resetResponse, setResponse, setLoading } from '../actions';

describe('App reducer', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(reducer()).toEqual(initialState);
  });

  it('should handle the "setLoading" action correctly', () => {
    const expectedResult = state.set('loading', 1);
    expect(reducer(state, setLoading(1))).toEqual(expectedResult);
  });

  it('should handle the "setLoading" action correctly', () => {
    const expectedResult = state
      .set('loading', false)
      .setIn(['response', 'type'], 1)
      .setIn(['response', 'message'], 1);
    expect(reducer(state, setResponse(1, 1, 1))).toEqual(expectedResult);
  });

  it('should handle the "setLoading" action correctly', () => {
    const expectedResult = state
      .set('loading', false)
      .setIn(['response', 'type'], false)
      .setIn(['response', 'message'], false);
    expect(reducer(state, resetResponse())).toEqual(expectedResult);
  });
});
