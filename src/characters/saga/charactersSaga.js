import { call, put, takeEvery } from 'redux-saga/effects'
import { LOAD_CHARACTERS } from '../actions/charactersActions';
import { PENDING, FULFILLED, REJECTED } from '../../shared/constants/common';

import { getCharacters } from '../api/charactersApi';

export function* loadCharacters(action){

    yield put({
        type: LOAD_CHARACTERS + PENDING,
        payload: { loading: true }
    });

    try{

      const { data } = yield call(getCharacters);

      yield put({
          type: LOAD_CHARACTERS + FULFILLED,
          payload: {
              loading: false,
              data,
              err: null
          }
      });

    } catch(err){

      yield put({
          type: LOAD_CHARACTERS + REJECTED,
          payload: {
              loading: false,
              data: {},
              err: err
          }
      });

    }

}

export function* watchGetCharacters(){
    yield takeEvery(LOAD_CHARACTERS, loadCharacters)
}
