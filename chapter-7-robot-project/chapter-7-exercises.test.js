const { compareRobots, packageOrientedRobot, PGroup } = require("./chapter-7-exercises");
const { routeRobot, goalOrientedRobot } = require("./chapter-7-project");

describe("Comparing Robots", () => {
    test("goalOrientedRobot is faster than routeRobot", () => {
        const results = compareRobots(routeRobot, goalOrientedRobot);
        expect(results.robot1Avg).toBeGreaterThan(results.robot2Avg);
    })
});

describe("package robot", () => {
    test("package robot is faster than goalOrientedRobot", () => {
        const results = compareRobots(goalOrientedRobot, packageOrientedRobot);
        expect(results.robot1Avg).toBeGreaterThan(results.robot2Avg);
    })
})

describe("PGroup class + Methods", () => {
    const a = PGroup.empty.add("a");
    const ab = a.add("b");
    const b = ab.delete("a");

    test("a is a PGroup with a", () => {
        expect(a instanceof PGroup).toBe(true);
        expect(a.has("a")).toBe(true);
    })

    test("return itself when trying to add a value that already exists", () => {
        expect(a.add("a")).toBe(a);
    })

    test("adds new value while not altering the previous PGroup", () => {
        expect(ab.values).toEqual(["a", "b"]);
        expect(a.has("b")).toBe(false);
    })

    test("deletes a value", () => {
        expect(b.has("a")).toBe(false);
    })

    test("return itself when deleting a value that doesn't exist", () => {
        expect(b.delete("a")).toBe(b);
    })

})