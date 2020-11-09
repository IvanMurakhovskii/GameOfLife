import { CellType } from "@/types";

export const makeGrid = (height: number, width: number, random = false): Array<Array<CellType>> => {
    let grid = new Array();
    for (var i = 0; i < height; i++) {
        var row = new Array();
        for (var j = 0; j < width; j++) {
            let cell;
            if (random) {
                cell = Math.random() > 0.85;
            }
            row.push({
                alive: cell
            });
        }
        grid.push(row);
    }
    return grid;
};


