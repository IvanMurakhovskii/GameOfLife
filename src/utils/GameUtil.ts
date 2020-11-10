import { BoardType, CellType, Coordinate } from "@/types";

export const makeGrid = (height: number, width: number, random = false): Array<Array<CellType>> => {
    let grid = new Array();
    for (var i = 0; i < height; i++) {
        var row = new Array();
        for (var j = 0; j < width; j++) {
            let cell;
            if (random) {
                cell = Math.random() > 0.9;
            }
            row.push({
                alive: cell
            });
        }
        grid.push(row);
    }
    return grid;
};

const _getAliveNeighboreCount = (coordinate: Coordinate, board: BoardType) => {
    let neightboreCount = 0;

    const { x, y } = { ...coordinate };
    const height = board.length;
    const width = board[0].length

    let topRow = x - 1 < 0 ? (height - 1) : x - 1;
    let bottomRow = (x + 1 === height) ? 0 : x + 1;
    let leftColumn = y - 1 < 0 ? (width - 1) : y - 1;
    let rightColumn = (y + 1 === width) ? 0 : y + 1;

    const getNumberFromBoolean = (x: number, y: number): number => {
        return Number(board[x][y].alive);
    }

    neightboreCount += getNumberFromBoolean(topRow, leftColumn);
    neightboreCount += getNumberFromBoolean(topRow, y);
    neightboreCount += getNumberFromBoolean(topRow, rightColumn);
    neightboreCount += getNumberFromBoolean(x, leftColumn);
    neightboreCount += getNumberFromBoolean(x, rightColumn);
    neightboreCount += getNumberFromBoolean(bottomRow, leftColumn);
    neightboreCount += getNumberFromBoolean(bottomRow, y);
    neightboreCount += getNumberFromBoolean(bottomRow, rightColumn);

    return neightboreCount;
}

export const updateGameField = (board: BoardType) => {
    console.log("updateGameField");
    const height = board.length;
    const width = board[0].length;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const isAlive = board[i][j].alive;
            const aliveNeighboreCount = _getAliveNeighboreCount({ x: i, y: j }, board);
            if (isAlive) {
                if (aliveNeighboreCount < 2 || aliveNeighboreCount > 3) {
                    board[i][j].alive = false;
                }
            } else {
                if (aliveNeighboreCount == 3) board[i][j].alive = true;
            }
        }
    }
}


