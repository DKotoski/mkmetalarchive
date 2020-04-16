import { History } from 'history';
import ApplicationState from './application-state';
import { getDefaultMiddleware, configureStore, combineReducers } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { reducers } from './root-reducer';

function configureAppStore(history: History) {
    const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

    const store = configureStore({
        reducer: getRootReducer(history),
        middleware: middleware
    });

    return store;
}

function getRootReducer(history: History) {
    return combineReducers({
        ...reducers,
        router: connectRouter(history)
    });
}

export default configureAppStore;