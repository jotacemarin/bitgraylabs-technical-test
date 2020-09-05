import { SHOW_MODAL, GET_ISSUE } from './constants';

export const displayModal = (showModal, url) => ({
  type: SHOW_MODAL,
  payload: { showModal, url },
});

export const getIssue = (url, action) => ({
  type: GET_ISSUE,
  payload: { url },
  action,
});
