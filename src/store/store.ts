import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reducer as gameReducer } from '@/components/GameField/slice'

const reducer = combineReducers({
    gameReducer
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



