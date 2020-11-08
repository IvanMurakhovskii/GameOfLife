import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const reducer = combineReducers({
});

export type StoreState = ReturnType<typeof reducer>;

function* rootSaga() {
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);



