const { compareRobots, packageOrientedRobot } = require("./chapter-7-exercises");
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