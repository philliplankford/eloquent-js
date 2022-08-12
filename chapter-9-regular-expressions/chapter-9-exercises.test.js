const {
    carCat,
    popProp,
    ferr,
    badPunc,
    endIous,
    moreThanSix,
    noE,
    singleToDouble,
    jsNums
} = require('./chapter-9-exercises');

describe("9.1 REGEX tests", () => {
    test("match car or cat", () => {
        expect(carCat.test("my car")).toBe(true);
        expect(carCat.test("bad cats")).toBe(true);
        expect(carCat.test("camper")).toBe(false);
    });

    test("match pop or prop", () => {
        expect(popProp.test("pop culture")).toBe(true);
        expect(popProp.test("mad props")).toBe(true);
        expect(popProp.test("plop")).toBe(false);
    });

    test("match ferret, ferry or ferrari", () => {
        expect(ferr.test("ferret")).toBe(true);
        expect(ferr.test("ferry")).toBe(true);
        expect(ferr.test("ferrari")).toBe(true);
        expect(ferr.test("ferrum")).toBe(false);
    });

    test("match a word that ends in ious", () => {
        expect(endIous.test("delicious")).toBe(true);
        expect(endIous.test("spacious room")).toBe(true);
        expect(endIous.test("ruinous")).toBe(false);
    });

    test("match whitespace followed by punctuation", () => {
        expect(badPunc.test(" .")).toBe(true);
        expect(badPunc.test("escape period")).toBe(false);
    });

    test("match any word greater than 6 characters", () => {
        expect(moreThanSix.test("Siebentausenddreihundertzweiundzwanzig")).toBe(true);
        expect(moreThanSix.test("no")).toBe(false);
    });

    test("match any word without e", () => {
        expect(noE.test("platypus")).toBe(true);
        expect(noE.test("eloquent")).toBe(false);
    });
});

describe("9.2 REGEX test", () => {
    test("replace single quotes with double quotes", () => {
        expect("'Hello there.'".replace(singleToDouble,"\"")).toBe("\"Hello there.\"");
        expect("'ain't it'".replace(singleToDouble,"\"")).toBe("\"ain't it\"");
    })
});

describe("9.3 REGEX test", () => {
    test("recognize JavaScript numbers", () => {
        expect(jsNums.test(".5")).toBe(true);
        expect(jsNums.test("10e5")).toBe(true);
        expect(jsNums.test(".")).toBe(false);
        expect(jsNums.test("+5")).toBe(true);

    })
});