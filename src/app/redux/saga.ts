import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

function* rootSaga() {
    yield all([]);
}

const sagaMiddleware = createSagaMiddleware();
export { sagaMiddleware, rootSaga };
