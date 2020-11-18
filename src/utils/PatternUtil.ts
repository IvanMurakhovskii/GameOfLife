import { PatternType } from "@/types";

export const glider: PatternType = Object.freeze({
    id: 1,
    name: "Glider",
    points: [{ x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: - 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }]
});

export const exploder: PatternType = Object.freeze({
    id: 2,
    name: "Exploder",
    points: [{ x: -1, y: -1 }, { x: -1, y: 1 }, { x: 0, y: -1 }, { x: 0, y: 1 }, { x: 1, y: -1 }, { x: 1, y: 1 }, { x: 2, y: 0 }]
});

export const spaceship: PatternType = Object.freeze({
    id: 3,
    name: "Spaceship",
    points: [{ x: -2, y: -1 }, { x: -2, y: 0 }, { x: -2, y: 1 }, { x: -2, y: 2 }, { x: -1, y: -2 }, { x: -1, y: 2 }, { x: 0, y: 2 }, { x: 1, y: -2 }, { x: 1, y: 1 }]
});

export const cellRows10: PatternType = Object.freeze({
    id: 4,
    name: "10 Cell Row",
    points: [{ x: 0, y: - 4 }, { x: 0, y: -3 }, { x: 0, y: -2 }, { x: 0, y: -1 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }]
});

export const patterns: Array<PatternType> = [
    glider, exploder, spaceship, cellRows10
];