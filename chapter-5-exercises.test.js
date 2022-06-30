const { flatten, loop, everyLoop, everySome } = require("./chapter-5-exercises");

test("convert array of arrays to single array", () => {
    expect(flatten([[1,2,3],[4,5,6],[7,8,9]])).toStrictEqual([1,2,3,4,5,6,7,8,9]);
});

test("apply given function to each value that fulfills a condition", () => {
    const logSpy = jest.spyOn(console, "log");

    loop(3, n => n > 0, n => n - 1, console.log)

    expect(logSpy).toHaveBeenCalledWith(1);
    expect(logSpy).toHaveBeenCalledWith(2);
    expect(logSpy).toHaveBeenCalledWith(3);
});

test("return true for all array elements against given test w/ loop", () => {
    expect(everyLoop([5,6,7], n => n > 1)).toBe(true);
    expect(everyLoop([5,6,1,0], n => n > 1)).toBe(false);
});

test("return true for all array elements against given test w/ some", () => {
    expect(everySome([5,6,7], n => n > 1)).toBe(true);
    expect(everySome([5,6,1,0], n => n > 1)).toBe(false);
});