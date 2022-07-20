const { buildGraph, VillageState } = require('./chapter-7-project');

// naming convention to categorize types of tests
// index.unit.test.js Unit tests
// index.int.test.js Integration tests

// describe breaks test suite into components
// you can nest describes to subdivide the suite
// "it" is an individual test. Its the same thing as "test"
// describe allows you to group outputs for readability

describe("Unit Tests", () => {
    // is this considered a unit test or an integration test?
    // there is a function nested in a the tested function
    test("returns graph", () => { 
        const list = ["Alice's House-Bob's House"];
        expect(buildGraph(list)).toEqual({
            "Alice's House": ["Bob's House"], 
            "Bob's House": ["Alice's House"]
        });
    })
});

describe("VillageState Class Tests", () => {
    const first = new VillageState(
        "Post Office",
        [{place: "Post Office", address: "Alice's House"}]
    );
    
    const packageReturn = new VillageState(
        "Post Office",
        [{place: "Alice's House", address: "Grete's House"}]
    );

    test("moves from post office to Alice's house", () => {
        expect(first.move("Alice's House").place).toBe("Alice's House");
    });

    test("returns previous state if destination does not exist", () => {
        expect(first.move("Hammerfell").place).toBe("Post Office");
    });

    test("returns the same parcel if it doesn't belong to the destination", () => {
        expect(packageReturn.move("Alice's House").parcels).toEqual([{place: "Alice's House", address: "Grete's House"}]);
    })
});