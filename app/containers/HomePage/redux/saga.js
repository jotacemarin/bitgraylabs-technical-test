import { takeLatest } from 'redux-saga/effects';

import * as comicvineService from 'services/comicvine';

import { GET_ISSUES } from './constants';

export default function* Saga() {
  yield takeLatest(GET_ISSUES, comicvineService.getIssues);
}
