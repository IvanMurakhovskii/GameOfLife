import { patterns } from "./PatternUtil";

const glider = [{ x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: - 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }];

const exploder = [{ x: -1, y: -1 }, { x: -1, y: 1 }, { x: 0, y: -1 }, { x: 0, y: 1 }, { x: 1, y: -1 }, { x: 1, y: 1 }, { x: 2, y: 0 }];

const spaceship = [{ x: -2, y: -1 }, { x: -2, y: 0 }, { x: -2, y: 1 }, { x: -2, y: 2 }, { x: -1, y: -2 }, { x: -1, y: 2 }, { x: 0, y: 2 }, { x: 1, y: -2 }, { x: 1, y: 1 }];

const cellRows10 = [{ x: 0, y: - 4 }, { x: 0, y: -3 }, { x: 0, y: -2 }, { x: 0, y: -1 }, { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }];

describe("PatternUtils", () => {
    it("should return Glider pattern", async () => {
        const pattern = patterns.find(p => p.id == 1);
        expect(pattern?.name).toEqual("Glider");
        expect(pattern?.points).toEqual(glider);
    });

    it("should return Exploder pattern", () => {
        const pattern = patterns.find(p => p.id == 2);
        expect(pattern?.name).toEqual("Exploder");
        expect(pattern?.points).toEqual(exploder);
    });

    it("should return Spaceship pattern", () => {
        const pattern = patterns.find(p => p.id == 3);
        expect(pattern?.name).toEqual("Spaceship");
        expect(pattern?.points).toEqual(spaceship);
    });

    it("should return 10 Cell Row pattern", () => {
        const pattern = patterns.find(p => p.id == 4);
        expect(pattern?.name).toEqual("10 Cell Row");
        expect(pattern?.points).toEqual(cellRows10);
    });
});