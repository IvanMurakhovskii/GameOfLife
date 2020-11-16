import { BoardType } from "@/types";
import { insertPatterntToBoard, makeGrid, updateGameField } from "./GameUtil";
import { patterns } from "./PatternUtil";



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

    it("insertPatterntToBoard should insert pattern", () => {
        insertPatterntToBoard(testBoard, 1);

        const height = testBoard.length;
        const width = testBoard[0].length;
        const x = Math.ceil(width / 2);
        const y = Math.ceil(height / 2);

        patterns.find(p => { p.id == 1 })?.points.forEach(point => {
            expect(testBoard[x + point.x][y + point.y].alive).toBeTruthy();
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
});