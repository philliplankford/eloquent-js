const { flatten } = require("./chapter-5-exercises");

test("convert array of arrays to single array", () => {
    expect(flatten([[1,2,3],[4,5,6],[7,8,9]])).toStrictEqual([1,2,3,4,5,6,7,8,9]);
});