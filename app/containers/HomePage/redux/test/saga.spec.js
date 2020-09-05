import { takeLatest } from 'redux-saga/effects';
import * as comicvineService from 'services/comicvine';
import { GET_ISSUES } from '../constants';
import Saga from '../saga';

describe('should start task to watch for...', () => {
  const SagaDescriptor = Saga.next().value;
  expect(SagaDescriptor).toEqual(
    takeLatest(GET_ISSUES, comicvineService.getIssues),
  );
});
