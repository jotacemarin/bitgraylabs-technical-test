import { SHOW_MODAL, GET_ISSUE } from '../constants';
import { displayModal, getIssue } from '../actions';

describe('DetailItems Actions', () => {
  it('displayModal', () => {
    const data = {
      type: SHOW_MODAL,
      payload: { showModal: 1, url: 1 },
    };
    expect(displayModal(1, 1)).toBe(data);
  });

  it('getIssue true', () => {
    const data = {
      type: GET_ISSUE,
      payload: { url: 1 },
      action: 1,
    };
    expect(getIssue(1, 1)).toBe(data);
  });
});
