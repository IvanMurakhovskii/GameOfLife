import { StoreState } from "@/store/store";
import { getUsername } from "./selector";

const state = {
    loginReducer: {
        username: "username"
    }
};

describe("Login selector", () => {
    it("getUsername should return name", () => {
        expect(getUsername(state as StoreState)).toEqual("username");
    });
});