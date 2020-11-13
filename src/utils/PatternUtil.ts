import { PatternType } from "@/types";



const glider: PatternType = {
    id: 1,
    name: "Glider",
    points: [{ x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: - 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }]
};

const exploder: PatternType = {
    id: 2,
    name: "Exploder",
    points: [{ x: -1, y: -1 }, { x: -1, y: 1 }, { x: 0, y: -1 }, { x: 0, y: 1 }, { x: 1, y: -1 }, { x: 1, y: 1 }, { x: 2, y: 0 }]
};

const spaceship: PatternType = {
    id: 3,
    name: "Spaceship",
    points: [{ x: -2, y: -1 }, { x: -2, y: 0 }, { x: -2, y: 1 }, { x: -2, y: 2 }, { x: -1, y: -2 }, { x: -1, y: 2 }, { x: 0, y: 2 }, { x: 1, y: -2 }, { x: 1, y: 1 }]
};

const cellRows10: PatternType = {
    id: 4,
    name: "10 Cell Row",
    points: [{ x: 0, y: - 4 }, { x: 0, y: -3 }, { x: 0, y: -2 }, { x: 0, y: -1 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }]
};

export const patterns: Array<PatternType> = [
    glider, exploder, spaceship, cellRows10
];




