import { BoardType } from "@/types";
import { findPatternById, getMiddlePoint, insertPatterntToBoard, isAliveCellShouldDeath, makeGrid, updateGameField } from "./GameUtil";
import { glider } from "./PatternUtil";



describe("GameUtils", () => {
    let testBoard: BoardType = new Array();
    beforeEach(() => {
        testBoard = [
            [{ alive: false }, { alive: false }, { alive: false }, { alive: false }, { alive: false }, { alive: false }],
            [{ alive: false }, { alive: false }, { alive: false }, { alive: false }, { alive: false }, { alive: false }],
            [{ alive: false }, { alive: false }, { alive: false }, { alive: false }, { alive: false }, { alive: false }],
            [{ alive: false }, { alive: false }, { alive: false }, { alive: false }, { alive: false }, { alive: false }],
            [{ alive: false }, { alive: false }, { alive: false }, { alive: false }, { alive: false }, { alive: false }],
            [{ alive: false }, { alive: false }, { alive: false }, { alive: false }, { alive: false }, { alive: false }]
        ]
    });

    it("make grid should create empty board", () => {
        const board = makeGrid(false, 0.1, 6, 6);
        expect(board).toEqual(testBoard);
    });

    it("make random grid should return grid with population < 0.1", () => {
        const board = makeGrid(true, 0.1, 6, 6);

        let count = 0;
        board.forEach((row) => {
            row.forEach(({ alive }) => {
                if (alive == true) count++;
            });
        });
        expect((count / 100) < 0.1).toBeTruthy();
    });

    it("insertPatterntToBoard should insert Glider", () => {
        const board = makeGrid();
        insertPatterntToBoard(board, 1);

        const height = board.length;
        const width = board[0].length;
        const middlePoint = getMiddlePoint(width, height);

        glider.points.forEach(point => {
            expect(board[middlePoint.x + point.x][middlePoint.y + point.y].alive).toBeTruthy();
        });
    });

    it("updateGameField should update alive cell", () => {

        const points = [{ x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }];

        const resultPoints = [{ x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }];

        points.forEach(({ x, y }) => {
            testBoard[x][y].alive = true;
        });

        const updatedBoard = updateGameField(testBoard);

        resultPoints.forEach(({ x, y }) => {
            expect(updatedBoard[x][y].alive).toBeTruthy();
        });
    });

    it("findPatternById should return pattern", () => {
        expect(findPatternById(1)).toEqual(glider);
    });

    it("getMiddlePoint should return {x: 3, y: 3}", () => {
        expect(getMiddlePoint(6, 6)).toEqual({ x: 3, y: 3 });
    });

    it("isAliveCellShouldDeath should return true", () => {
        expect(isAliveCellShouldDeath(3)).toBeFalsy();
    });

    it("isAliveCellShouldDeath should return false", () => {
        expect(isAliveCellShouldDeath(4)).toBeTruthy();
    });
});