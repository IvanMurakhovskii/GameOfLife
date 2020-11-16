import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reducer as gameReducer } from '@/modules/Game/slice'
import { gameSaga } from "@/modules/Game/saga";
import { fork } from "redux-saga/effects";
import { reducer as loginReducer } from '@/modules/Authentification/slice';
import { loginSaga } from "@/modules/Authentification/saga";

const reducer = combineReducers({
    gameReducer,
    loginReducer
});

export type StoreState = ReturnType<typeof reducer>;

function* rootSaga() {
    yield fork(gameSaga);
    yield fork(loginSaga);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);



