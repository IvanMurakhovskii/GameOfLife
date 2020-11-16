import { actions, initialState, reducer } from './slice';

describe("game slice", () => {
    it("action should fill board random values", () => {
        const state = reducer(initialState, actions.fillInBoardRandom);
        expect(state.board).toBeTruthy();
    });

    it("action should fill board random values", () => {
        const state = reducer(initialState, actions.setPopulation(20));
        expect(state.population).toEqual(0.2);
    });
});
