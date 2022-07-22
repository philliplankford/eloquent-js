const { runRobot, 
        VillageState,
        goalOrientedRobot,
        routeRobot,
        randomRobot } = require("./chapter-7-project");

// 7.1 - Measuring a Robot
// write a function compareRobots that takes two robots
// it should generate 100 tasks and have each robots solve each task
// outputs average number of steps each robot took per task

function compareRobots(robot1, robot2) {
    const results = { robot1: [], robot2: []}
    const numberOfTests = 100;

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
}

compareRobots(routeRobot, goalOrientedRobot);