const { roadGraph,
        runRobot, 
        VillageState,
        findRoute} = require("./chapter-7-project");

// 7.1 - Measuring a Robot
// write a function compareRobots that takes two robots
// it should generate 100 tasks and have each robots solve each task
// outputs average number of steps each robot took per task

function compareRobots(robot1, robot2) {
    const results = { robot1: [], robot2: []}
    const numberOfTests = 10;

    for (let i = 0; i < numberOfTests; i++) {
        const newTask = VillageState.random();
        results.robot1.push(runRobot(newTask, robot1, []));
        results.robot2.push(runRobot(newTask, robot2, []));
    }

    const robot1Avg = results.robot1.reduce( (a,b) => a + b) / numberOfTests;
    const robot2Avg = results.robot2.reduce( (a,b) => a + b) / numberOfTests;

    console.log(
        `
        robot1 took an average ${robot1Avg} turns. 
        robot2 took an average ${robot2Avg} turns.
        `
        );
    
    return { robot1Avg, robot2Avg };
}

module.exports.compareRobots = compareRobots;

// 7.2 - Robot Efficiency
// Write a robot that is faster than goalOriented Robot
// Observe the robot's behavior. How could it be improved?
// Use compareRobots to verify that it's faster.

// My observations:
// Currently the robot favors the shortest route to the
// it favors the shortest route to the packages destination
// this causes the robot to go across the town to deliver 
// even if there is a package nearby

// compute routes for all packages
// take shortest one
// multiple short routes = prefer ones that go pick up a package instead of delivering

function packageOrientedRobot({place, parcels}, route) {
    if (route.length === 0) {
        let routes = parcels.map(parcel => {
            if (parcel.place != place) {
                return { route: findRoute(roadGraph, place, parcel.place), pickUp: true };
            } else {
                return { route: findRoute(roadGraph, place, parcel.address), pickUp: false };
            }
        });

        function precedence({route, pickUp}) {
            return pickUp - route.length;
        };

        route = routes.reduce((acc, current) => precedence(acc) > precedence(current) ? acc : current).route;
    }

    return { direction: route[0], memory: route.slice(1) };
}

module.exports.packageOrientedRobot = packageOrientedRobot;

// runRobot(VillageState.random(), packageOrientedRobot, []);