import { BoardType, CellType, Coordinate } from "@/types";
import { makeGrid } from "@/utils";
import { updateGameField } from "@/utils/GameUtil";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GameState = {
    board: BoardType,
    isRunning: boolean,
    intervalId: number | undefined
}

export const initialState: GameState = {
    board: new Array(),
    isRunning: false,
    intervalId: undefined
};

const game = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        toggleAlive: (state, { payload }: PayloadAction<Coordinate>) => {
            const { x, y } = { ...payload };
            let cell = state.board[x][y];
            cell.alive = !cell.alive;
        },
        fillInBoardRandom: (state, action: PayloadAction<number>) => {
            const fieldSize = action.payload;
            const board = makeGrid(fieldSize, fieldSize, true);
            state.board = board;
        },
        start: (state) => {
            state.isRunning = true;
            console.log("action start");
        },
        update: (state) => {
            console.log("action update");
            updateGameField(state.board);
        },
        stop: (state) => {
            state.isRunning = false;
        },
        reset: (state) => {
            state.isRunning = false;
            state.board = new Array();
        },
        setBoard: (state, action: PayloadAction<BoardType>) => {
            state.board = action.payload;
        }
    }
});

export const { actions, reducer } = game;
