import { actions, reducer } from './slice';

const initialState = {
    username: "test"
}

describe("Login slice", () => {
    it("action should fill username to state", () => {
        const state = reducer(initialState, actions.login("username"));
        expect(state.username).toEqual("username");
    });

    it("action should logout user", () => {
        const state = reducer(initialState, actions.logout());
        expect(state.username).toEqual("");
    });
});
