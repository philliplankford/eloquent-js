const { Vector } = require('./chapter-6-exercises');

// 6.1 Tests
describe("Vector Method Tests", () => {
    const vector = new Vector(1,2);
    test("plus returns vector with added points", () => {
        expect(vector.plus(new Vector(2,3))).toEqual({x: 3, y:5});
    });
    test("minus return vector with subtracted points", () => {
        expect(vector.minus(new Vector(2,3))).toEqual({x: -1, y: -1});
    });
    test("length returns distance from (0,0) origin", () => {
        expect(new Vector(3,4).length).toBe(5);
    });
});

// 6.1 Class Interface Testing + Jest Spy Exploration
describe("Vector Interface", () => {
    const vector = new Vector(1,1);
    test("object defined", () => { expect(vector).toEqual({x: 1, y: 1})});
    test("defines plus()", () => { expect(typeof vector.plus).toBe("function"); });
    test("defines minus()", () => { expect(typeof vector.minus).toBe("function"); });
});

describe("Vector SpyOn Tests", () => {
    const vector = new Vector(1,1);

    jest.clearAllMocks();
    
    test("Plus should be called once and return Vector {x: 2, y: 2}", () => {
        jest.spyOn(Vector.prototype, 'plus');
        vector.plus(new Vector(1,1));

        expect(Vector.prototype.plus).toHaveBeenCalledTimes(1);
        expect(Vector.prototype.plus).toHaveReturnedWith({x: 2, y: 2});
    });

    test("Minus should be called once and return Vector {x: 0, y: 0}", () => {
        const minusSpy = jest.spyOn(Vector.prototype, 'minus');
        vector.minus(new Vector(1,1));

        expect(minusSpy).toHaveBeenCalledTimes(1);
        expect(minusSpy).toHaveReturnedWith({x: 0, y: 0});
    })
});