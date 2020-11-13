import { expectSaga, testSaga } from "redux-saga-test-plan";
import { select } from 'redux-saga-test-plan/matchers';
import { actions } from "./slice";
import { gameSaga, startGame } from "./saga";
import { getSpeed } from "./selector";


describe("Game saga", () => {
    it("start game", () => {
        return expectSaga(startGame)
            .provide([[select(getSpeed), 50]])
            .put(actions.update())
            .delay(50)
            .run();
    });

    it("game saga", () => {
        testSaga(gameSaga)
            .next()
            .take(actions.start.type)
            .next()
            .fork(startGame)
            .next()
            .take(actions.stop.type)
            .next()
            .finish();
    });
});