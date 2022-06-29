const { range, sum, reverseArray, reverseArrayInPlace } = require("./chapter-4-exercises");

// 4.1 Tests
// Unit Tests

test("return array of numbers between range, inclusive", () => {
    expect(range(1,4)).toStrictEqual([1,2,3,4]);
    expect(range(1,10,2)).toStrictEqual([1,3,5,7,9]);
    expect(range(5,2,-1)).toStrictEqual([5,4,3,2]);
});

test("return sum of array of numbers", () => {
    expect(sum([1,2,3,4])).toBe(10);
});

// Integration Tests

test("return the sum of a range", () => {
    expect(sum(range(1,10))).toBe(55);
    expect(sum(range(10,1))).toBe(55);
    expect(sum(range(1,10,2))).toBe(25);
});

// 4.2 Tests 
test("produces reversed array", () => {
    expect(reverseArray([1,2,3,4])).toStrictEqual([4,3,2,1]);
    expect(reverseArray([1,2,3,4,5])).toStrictEqual([5,4,3,2,1]);
});

test("produces reversed array", () => {
    expect(reverseArrayInPlace([1,2,3,4])).toStrictEqual([4,3,2,1]);
    expect(reverseArray([1,2,3,4,5])).toStrictEqual([5,4,3,2,1]);
});