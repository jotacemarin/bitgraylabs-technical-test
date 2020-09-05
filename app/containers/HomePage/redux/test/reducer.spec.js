import reducer, { initialState } from '../reducer';
import { toggleView } from '../actions';

describe('LeadMedia Reducer', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(reducer(undefined)).toEqual(state);
  });

  it('should handle the "displayModal" action correctly', () => {
    const expectedResult = state.set('gridView', false);
    expect(reducer(state, toggleView(false))).toEqual(expectedResult);
  });
});
