import { SET_LOADING, SET_RESPONSE, RESET_RESPONSE } from '../constants';
import { setLoading, setResponse, resetResponse } from '../actions';

describe('SET_LOADING, setLoading', () => {
  it('dispatch a SET_LOADING action', () => {
    const data = {
      type: SET_LOADING,
      payload: { isLoading: true },
    };
    expect(setLoading(true)).toEqual(data);
  });
});

describe('SET_RESPONSE, setResponse', () => {
  it('dispatch a SET_RESPONSE action', () => {
    const data = {
      type: SET_RESPONSE,
      payload: { type: 1, title: 1, message: 1 },
    };
    expect(setResponse(1, 1, 1)).toEqual(data);
  });

  it('dispatch a SET_RESPONSE action', () => {
    const data = {
      type: SET_RESPONSE,
      payload: { type: false, title: false, message: false },
    };
    expect(setResponse()).toEqual(data);
  });
});

describe('RESET_RESPONSE, resetResponse', () => {
  it('dispatch a RESET_RESPONSE action', () => {
    const data = { type: RESET_RESPONSE };
    expect(resetResponse()).toEqual(data);
  });
});
