import { actions, reducer, initialState } from './slice';

const testState = {
    username: "test"
}

describe("Login slice", () => {

    it("initialState", () => {
        const state = { username: "" }
        expect(initialState).toEqual(state);
    });

    it("action should fill username to state", () => {
        const state = reducer(testState, actions.login("username"));
        expect(state.username).toEqual("username");
    });

    it("action should logout user", () => {
        const state = reducer(testState, actions.logout());
        expect(state.username).toEqual("");
    });

    it("action should set username", () => {
        const state = reducer(testState, actions.setUsername("username"));
        expect(state.username).toEqual("username");
    });
});
