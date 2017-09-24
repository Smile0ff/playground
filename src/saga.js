import { all } from 'redux-saga/effects';
import sagaRegistry from './shared/registry/sagaRegistry';

const sagas = sagaRegistry.toArray();

function* rootSaga(){
    yield all(sagas);
}

export default rootSaga;