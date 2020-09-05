import { takeLatest } from 'redux-saga/effects';

import * as comicvineService from 'services/comicvine';

import { GET_ISSUE } from './constants';

export default function* Saga() {
  yield takeLatest(GET_ISSUE, comicvineService.getIssue);
}
