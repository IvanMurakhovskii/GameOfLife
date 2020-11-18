import { BoardType, CellType, Coordinate, PatternType } from "@/types";
import { patterns } from "./PatternUtil";

export const makeGrid = (random = false, population = 0.1, height = 30, width = 30): Array<Array<CellType>> => {
    let grid = new Array();
    for (var i = 0; i < height; i++) {
        var row = new Array();
        for (var j = 0; j < width; j++) {
            let cell;
            if (random) {
                cell = Math.random() < population;
            } else {
                cell = false;
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

export const updateGameField = (board: BoardType): BoardType => {
    const height = board.length;
    const width = board[0].length;

    const newBoard = new Array();
    for (let i = 0; i < height; i++) {
        const row = new Array<CellType>();

        for (let j = 0; j < width; j++) {
            const isAlive = board[i][j].alive;
            const aliveNeighboreCount = _getAliveNeighboreCount({ x: i, y: j }, board);
            if (isAlive) {
                if (isAliveCellShouldDeath(aliveNeighboreCount)) {
                    row.push({ alive: false });
                } else {
                    row.push({ alive: true });
                }
            } else {
                if (aliveNeighboreCount == 3) {
                    row.push({ alive: true });
                } else {
                    row.push({ alive: false });
                }
            }
        }
        newBoard.push(row);
    }
    return newBoard;
}

export const isAliveCellShouldDeath = (aliveNeighboreCount: number): boolean => {
    return (aliveNeighboreCount < 2 || aliveNeighboreCount > 3)
}


export const insertPatterntToBoard = (board: BoardType, patternId: number) => {
    const height = board.length;
    const width = board[0].length;
    const points = findPatternById(patternId)?.points;

    if (points !== undefined) {
        const middlePoint = getMiddlePoint(width, height);

        points.forEach((point) => {
            board[middlePoint.x + point.x][middlePoint.y + point.y].alive = true;
        });
    }
}

export const getMiddlePoint = (width: number, height: number): Coordinate => {
    return { x: Math.ceil(width / 2), y: Math.ceil(height / 2) };
}

export const findPatternById = (id: number): PatternType | undefined => {
    return patterns.find((p) => p.id == id);
}


