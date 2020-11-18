import { logIn, logOut } from "@/utils";
import { take, select, call } from "redux-saga/effects"
import { getUsername } from "./selector";
import { actions } from "./slice";


export function* loginSaga() {
    while (true) {
        yield take(actions.login.type);
        const username = yield select(getUsername);
        yield call(logIn, username);
        yield take(actions.logout.type);
        yield call(logOut);
    }
}