import { CellType, Coordinate } from "@/types";
import { makeGrid } from "@/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GameState = {
    board: Array<Array<CellType>>,
    start: boolean
}

export const initialState: GameState = {
    board: new Array(),
    start: false
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
        startRandomGame: (state, action: PayloadAction<number>) => {
            const fieldSize = action.payload;
            const board = makeGrid(fieldSize, fieldSize, true);
            state.board = board;
            state.start = true;
        }
    }
});

export const { actions, reducer } = game;
