import { take, fork, delay, put, cancel, select } from "redux-saga/effects"
import { getSpeed } from "./selector";
import { actions } from "./slice";


export function* startGame() {
    while (true) {
        const speed: number = yield select(getSpeed);
        yield put(actions.update());
        yield delay(speed);
    }
}

export function* gameSaga() {
    while (true) {
        yield take(actions.start.type);
        const task = yield fork(startGame);
        yield take(actions.stop.type);
        yield cancel(task);
    }
}