const { min, isEven, countChar, countBs } = require('./chapter-3-exercises');

// unit tests 

test('return minimum of two given numbers', () => {
    expect(min(1,2)).toBe(1);
    expect(min(100, 50)).toBe(50);
});

test('return if number is even', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(-2)).toBe(true);
    expect(isEven(-3)).toBe(false);
});

test('count exact specified character occurances in string', () => {
    expect(countChar("QUEEN BEE","E")).toBe(4);
    expect(countChar("queen bee", "E")).toBe(0);
})

// integration tests

test('count bs in a string', () => {
    expect(countBs("BUBBLY BOBA")).toBe(5);
    expect(countBs("bubbly boba")).toBe(0);
});