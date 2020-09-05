import { call, put } from 'redux-saga/effects';

import * as globalActions from 'containers/App/redux/actions';

import request from 'services/request';

const api = 'https://comicvine.gamespot.com/api/';
const apiToken = '8847c7df68b0259f63f59a6d80b5e8ea8a7f5eee';

export function* getIssues(action) {
  const {
    action: runAfterSuccess,
    payload: { limit, offset },
  } = action;

  const requestURL = `${api}issues?api_key=${apiToken}&format=json&limit=${limit}&offset=${offset}`;

  const options = { method: 'GET' };

  try {
    const response = yield call(request, requestURL, options);

    if (runAfterSuccess) {
      runAfterSuccess(response);
    }

    yield put(globalActions.resetResponse());
  } catch (error) {
    yield put(globalActions.setResponse('error', 'comicvineIssues'));
  }
}

export function* getIssue(action) {
  const {
    action: runAfterSuccess,
    payload: { url },
  } = action;

  const requestURL = `${url}?api_key=${apiToken}&format=json`;
  const options = {
    externalUrl: true,
    method: 'GET',
  };

  try {
    const response = yield call(request, requestURL, options);

    if (runAfterSuccess) {
      runAfterSuccess(response);
    }

    yield put(globalActions.resetResponse());
  } catch (error) {
    yield put(globalActions.setResponse('error', 'comicvineIssue'));
  }
}
