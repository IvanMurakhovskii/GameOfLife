import { StoreState } from "@/store/store";
import { makeGrid } from "@/utils";
import { getBoard, getSpeed } from "./selector";

const board = makeGrid();

const state = {
    gameReducer: {
        speed: 30,
        board: makeGrid()
    }
};

describe("selectors", () => {
    it("getSpeed should return speed", () => {
        expect(getSpeed(state as StoreState)).toEqual(30);
    });
    it("getBoard should return speed", () => {
        expect(getBoard(state as StoreState)).toEqual(board);
    });
});