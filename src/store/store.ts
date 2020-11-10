import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reducer as gameReducer } from '@/components/GameField/slice'
import { gameSaga } from "@/components/GameField/saga";
import { fork } from "redux-saga/effects";

const reducer = combineReducers({
    gameReducer
});

export type StoreState = ReturnType<typeof reducer>;

function* rootSaga() {
    yield fork(gameSaga);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);



