import { testSaga } from "redux-saga-test-plan";
import { actions } from "./slice";
import { loginSaga } from "./saga";
import { getUsername } from "./selector";
import { logIn, logOut } from "@/utils";


describe("Login saga", () => {
    it("login saga", () => {
        testSaga(loginSaga)
            .next()
            .take(actions.login.type)
            .next()
            .select(getUsername)
            .next('username')
            .call(logIn, 'username')
            .next()
            .take(actions.logout.type)
            .next()
            .call(logOut)
            .finish();
    });
});