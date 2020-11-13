import { BoardType } from '@/types';
import { insertPatterntToBoard, makeGrid } from '@/utils';
import { actions, initialState, reducer } from './slice';

const mockBoard: BoardType = [
    [{ alive: false }, { alive: true }, { alive: true }],
    [{ alive: false }, { alive: false }, { alive: false }],
    [{ alive: false }, { alive: false }, { alive: true }]
];

describe("game slice", () => {
    it("action should fill board random values", () => {
        const state = reducer(initialState, actions.fillInBoardRandom);
        expect(state.board).toBeTruthy();
    });

    it("action should fill population", () => {
        const state = reducer(initialState, actions.setPopulation(20));
        expect(state.population).toEqual(0.2);
    });

    it("action should fill board where all cell alive = false", () => {
        const board = makeGrid();
        const state = reducer(initialState, actions.clear);
        expect(state.board).toEqual(board);
    });

    it("action should fill pattern in board", () => {
        const board = makeGrid();
        insertPatterntToBoard(board, 1);
        const state = reducer(initialState, actions.insertPattern(1));
        expect(state.board).toEqual(board);
    });

    it("action should fill speed to state", () => {
        const state = reducer(initialState, actions.setSpeed(20));
        expect(state.speed).toEqual(800);
    });

    it("action should set isRunning true", () => {
        const state = reducer(initialState, actions.start);
        expect(state.isRunning).toBeTruthy();
    });

    it("action should set isRunning false", () => {
        const state = reducer(initialState, actions.stop);
        expect(state.isRunning).toBeFalsy();
    });

    it("action should update board", () => {
        const state = reducer({ ...initialState, board: mockBoard }, actions.update);
        expect(state.board[1][1].alive).toBeTruthy();
    });

    it("action should meke cell alive", () => {
        const board = makeGrid();
        const point = { x: 0, y: 0 };
        const state = reducer({ ...initialState, board }, actions.toggleAlive(point));
        expect(state.board[0][0].alive).toBeTruthy();
    });
});
