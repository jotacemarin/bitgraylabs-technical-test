import reducer, { initialState } from '../reducer';
import { displayModal } from '../actions';

describe('LeadMedia Reducer', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(reducer(undefined)).toEqual(state);
  });

  it('should handle the "displayModal" action correctly', () => {
    const expectedResult = state.set('showModal', true).set('url', 1);
    expect(reducer(state, displayModal(true, 1))).toEqual(expectedResult);
  });
});
