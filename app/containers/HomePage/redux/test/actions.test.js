import { TOGGLE_VIEW, GET_ISSUES } from '../constants';
import { getIssues, toggleView } from '../actions';

describe('HomePage Actions', () => {
  it('getIssues', () => {
    const data = {
      type: GET_ISSUES,
      payload: { limit: 1, offset: 1 },
      action: 1,
    };
    expect(getIssues(1, 1, 1)).toBe(data);
  });

  it('toggleView true', () => {
    const data = {
      type: TOGGLE_VIEW,
      payload: { isGrid: true },
    };
    expect(toggleView(true)).toBe(data);
  });

  it('toggleView true', () => {
    const data = {
      type: TOGGLE_VIEW,
      payload: { isGrid: false },
    };
    expect(toggleView(false)).toBe(data);
  });
});
