import { StoreState } from "@/store/store";
import { BoardType } from "@/types";
import { updateGameField } from "@/utils/GameUtil";
import { action } from "@storybook/addon-actions";
import { call, select, take, fork, delay, put } from "redux-saga/effects"
import { actions } from "./slice";

export const getBoard = ({ gameReducer }: StoreState): BoardType => gameReducer.board;

export function* startGame() {
    while (true) {
        console.log("saga start");
        // const board = yield select(getBoard);
        // updateGameField(board);
        yield put(actions.update());
        // yield put(actions.setBoard(board));
        yield delay(100);
    }
}

export function* gameSaga() {
    while (true) {
        yield take(actions.start.type);
        yield fork(startGame);
        yield take(actions.stop.type);
        yield take(actions.reset.type);
    }
}