const { flatten, loop, everyLoop, everySome, characterDirection, countGroups, dominantDirection } = require("./chapter-5-exercises");

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

// 5.4 Tests 

// unit tests
test("get character direction", () => {
    expect(characterDirection("H")).toBe("ltr");
    expect(characterDirection("ر")).toBe("rtl");
    expect(characterDirection("😀")).toBe(null);
    expect(characterDirection("ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ")).toBe("ttb");
});

test("count instances of elements in an array", () => {
    expect(countGroups(["pig", "pig", "cow"], n => n)).toStrictEqual([{name: "pig", count: 2}, {name: "cow", count: 1}]);
});

// integration test 

test("return the dominant character direction in a given string", () => {
    expect(dominantDirection("Hello!")).toBe("ltr");
    expect(dominantDirection("Hey, مساء الخير")).toBe("rtl");
    expect(dominantDirection("Hi, ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ مساء ا")).toBe("ttb");
    expect(dominantDirection("")).toBe("ltr");
});