import { BoardType, Coordinate } from "@/types";
import { makeGrid } from "@/utils";
import { insertPatterntToBoard, updateGameField } from "@/utils/GameUtil";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GameState = {
    board: BoardType,
    isRunning: boolean,
    population: number,
    speed: number
}

export const initialState: GameState = {
    board: new Array(),
    isRunning: false,
    population: 0.1,
    speed: 700
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
        fillInBoardRandom: (state) => {
            state.board = makeGrid(true, state.population);
        },
        start: (state) => {
            state.isRunning = true;
        },
        update: (state) => {
            state.board = updateGameField(state.board);
        },
        stop: (state) => {
            state.isRunning = false;
        },
        clear: (state) => {
            state.board = makeGrid(false);
        },

        setPopulation: (state, action: PayloadAction<number>) => {
            state.population = (action.payload / 100);
        },
        setSpeed: (state, action: PayloadAction<number>) => {
            state.speed = ((100 - action.payload) * 10);
        },
        insertPattern: (state, action: PayloadAction<number>) => {
            state.board = makeGrid(false);
            insertPatterntToBoard(state.board, action.payload)
        },
    }
});

export const { actions, reducer } = game;
