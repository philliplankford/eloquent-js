const { randomRange, primitiveMultiply, MultiplicatorUnitFailure, tryPrimitive } = require("./chapter-8-exercises");

describe("functions", () => {

    // beforeEach(() => {
    //     jest.spyOn(Math, 'random').mockReturnValue(.1);
    // });

    test("randomRange returns number between 1 and 100", () => {
        const num = randomRange(1,100);
        expect(num < 100 && num > 1).toBe(true);
    })

    test("return two numbers multiplied when chance is passed", () => {
        jest.spyOn(Math, 'random').mockReturnValue(.1);
        expect(primitiveMultiply(2,5)).toBe(10);
        jest.spyOn(Math, 'random').mockRestore();
    })

    test("throw multiplicator error", () => {
        jest.spyOn(Math, 'random').mockReturnValue(.5);
        // the function that is expected to throw has to be wrapped in it's own function
        expect(() => { primitiveMultiply(2,5) }).toThrow(MultiplicatorUnitFailure);
        jest.spyOn(Math, 'random').mockRestore();
    })

    // test("throws error", () => {
    //     const throwError = () => { throw new Error("Different Error") };
    //     // expect(() => { tryFunc(throwError)} ).toThrow();
    //     expect(() => { tryPrimitive() }).toThrow();
    // })
})