const { range, sum, 
        reverseArray, reverseArrayInPlace, 
        arrayToList, listToArray, prepend, nth, 
        deepEqual } = require("./chapter-4-exercises");

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

// 4.3 Tests 
test("makes a list from given array", () => {
    expect(arrayToList([1,2,3])).toStrictEqual({value: 1, rest: {value: 2, rest: {value: 3, rest: null }}});
});

test("makes an array from given list", () => {
    expect(listToArray({value: 1, rest: {value: 2, rest: {value: 3, rest: null }}})).toStrictEqual([1,2,3]);
});

test("append to front of list", () => {
    expect(prepend(20, {value: 1, rest: {value: 2, rest: null }})).toStrictEqual({value: 20, rest: {value: 1, rest: {value: 2, rest: null }}});
});

test("return element at numbered location", () => {
    expect(nth({value: 1, rest: {value: 2, rest: null }}, 1)).toStrictEqual({value: 2, rest: null });
    expect(nth({value: 1, rest: {value: 2, rest: null }}, 4)).toBe(undefined);
});

// 4.4 Tests
test("return if two given values deeply equal eachother", () => {
    const obj = {here: {is: "an"}, object: 2};
    expect(deepEqual(obj, obj)).toBe(true);
    expect(deepEqual(obj,{here: 1, object: 2})).toBe(false);
    expect(deepEqual(obj,{here: {is: "an"}, object: 2})).toBe(true);
    expect(deepEqual(obj,{here: {is: "an"}, non: 2})).toBe(false);
    expect(deepEqual(obj,{hi: "greg"})).toBe(false)
    expect(deepEqual(obj, null)).toBe(false);

    expect(deepEqual(1,1)).toBe(true);
    expect(deepEqual(1,2)).toBe(false);
});