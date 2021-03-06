export type CellType = {
    alive: boolean
}

export type Coordinate = {
    x: number,
    y: number
}

export type BoardType = Array<Array<CellType>>;

export type PatternType = {
    id: number,
    name: String,
    points: Array<Coordinate>
}