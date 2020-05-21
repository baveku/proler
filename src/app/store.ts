import { rootSaga, sagaMiddleware } from './saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { RootState, rootReducer } from './reducers';

let middleware = [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
] as any;

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middleware.push(logger);
}

const initialStore = () => {
    const appStore = configureStore<RootState>({
        reducer: rootReducer,
        middleware,
        devTools: process.env.NODE_ENV !== 'production',
    });
    sagaMiddleware.run(rootSaga);
    return appStore;
};

export const store = initialStore();
