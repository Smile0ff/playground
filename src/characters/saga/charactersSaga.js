import { call, put, takeEvery } from 'redux-saga/effects'
import { LOAD_CHARACTERS } from '../actions/charactersActions';
import { PENDING, FULFILLED, REJECTED } from '../../shared/constants/common';

import { getCharacters } from '../api/charactersApi';

function* loadCharacters(action){
    
    yield put({
        type: LOAD_CHARACTERS + PENDING,
        payload: { loading: true }
    });

    const result = yield call(getCharacters);
    const { data, status } = result;

    if(status === 200){

        yield put({
            type: LOAD_CHARACTERS + FULFILLED,
            payload: {
                loading: false,
                data,
                err: null
            }
        });

    } else{
        const err = new Error('Characters error');

        yield put({
            type: LOAD_CHARACTERS + REJECTED,
            pyaload: {
                loading: false,
                data: {},
                err
            }
        });
    }

}

export function* watchGetCharacters(){
    yield takeEvery(LOAD_CHARACTERS, loadCharacters)
}

