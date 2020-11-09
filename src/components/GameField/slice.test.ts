import { makeGrid } from '@/utils';
import { actions, initialState, reducer } from './slice';

const makeGridMock = jest.fn(makeGrid);

describe("game slice", () => {
    it("action should start random game", () => {
        const state = reducer(initialState, actions.startRandomGame);
        expect(state.board).toBeTruthy();
        expect(state.start).toBeTruthy()
    });
});
