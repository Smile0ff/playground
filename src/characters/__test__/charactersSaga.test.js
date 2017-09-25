import { testSaga } from 'redux-saga-test-plan'
import { take, call, put, takeEvery } from 'redux-saga/effects'
import { loadCharacters, watchGetCharacters } from '../saga/charactersSaga';
import { LOAD_CHARACTERS } from '../actions/charactersActions';
import { PENDING, FULFILLED, REJECTED } from '../../shared/constants/common';

import { getCharacters } from '../api/charactersApi';

describe('character list saga', () => {

  it('should handle LOAD_CHARACTERS action', () => {

    const saga = testSaga(watchGetCharacters);

    saga
      .next()
      .takeEveryEffect(LOAD_CHARACTERS, loadCharacters)
      .finish()
      .isDone();

  });

  it('should handle resolved response', () => {

    const saga = testSaga(loadCharacters);
    const response = {
      loading: false,
      data: {
        count: 1,
        next: '',
        previous: null,
        results: []
      },
      err: null
    };

    saga
      .next()
      .put({
        type: LOAD_CHARACTERS + PENDING,
        payload: { loading: true }
      })

      .next()
      .call(getCharacters)

      .next(response)
      .put({ type: LOAD_CHARACTERS + FULFILLED, payload: response })

      .next()
      .isDone();

  });

  it('should handle rejected response', () => {
    const saga = testSaga(loadCharacters);
    const response = {
      loading: false,
      data: {},
      err: new Error('test error')
    };

    saga
      .next()
      .put({
        type: LOAD_CHARACTERS + PENDING,
        payload: { loading: true }
      })

      .next()
      .call(getCharacters)

      .throw(new Error('test error'))
      .put({ type: LOAD_CHARACTERS + REJECTED, payload: response })

      .next()
      .isDone();

  });

});
