import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './root';

const loggerMiddleware = createLogger();

export default preloadedState => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            loggerMiddleware
        )
    );
};