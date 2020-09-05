import { DEFAULT_ACTION } from './constants';

export const defaultAction = (showModal, url) => ({
  type: DEFAULT_ACTION,
  payload: { showModal, url },
});
