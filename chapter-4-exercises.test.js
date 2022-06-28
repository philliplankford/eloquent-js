const { range, sum } = require("./chapter-4-exercises");

// unit tests

test("return array of numbers between range, inclusive", () => {
    expect(range(1,4)).toStrictEqual([1,2,3,4]);
    expect(range(1,10,2)).toStrictEqual([1,3,5,7,9]);
    expect(range(5,2,-1)).toStrictEqual([5,4,3,2]);
});

test("return sum of array of numbers", () => {
    expect(sum([1,2,3,4])).toBe(10);
});

// integration tests

test("return the sum of a range", () => {
    expect(sum(range(1,10))).toBe(55);
    expect(sum(range(10,1))).toBe(55);
    expect(sum(range(1,10,2))).toBe(25);
});