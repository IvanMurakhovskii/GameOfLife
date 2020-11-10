import { actions, initialState, reducer } from './slice';

describe("game slice", () => {
    it("action should fill board random values", () => {
        const state = reducer(initialState, actions.fillInBoardRandom);
        expect(state.board).toBeTruthy();
    });
});
