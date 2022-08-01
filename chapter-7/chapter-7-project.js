// Chapter 7 Project - Build a Mail Delivery Robot

const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];

// we aren't interested in the roads
// we are interested in the destination
// we can reach from each given place

// convert the array to a datastructure
// for each place it will tell us what 
// can be reached from there

// builds a map object for each node lists
// the connecting nodes

function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

module.exports.buildGraph = buildGraph;

const roadGraph = buildGraph(roads);

module.exports.roadGraph = roadGraph;

// The Task
// Robot picks up parcels at each location and delivers them to the respective destination.
// At each point it should decide where to go next. 
// The task is finished when all parcels are delivered.

// We must define a virtual world 
// Avoid automatically thinking everything should be a class object
// condense the villages state to this:
// 1. Robot's location 
// 2. Collection of undelivered parcels
// 3. Each parcel has location and destination
// we won't change the state when the robot moves we'll return a new state for the 
// situation after the move.

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }

    static random(parcelCount = 5) {
        let parcels = [];
        for (let i = 0; i < parcelCount; i++) {
            let address = randomPick(Object.keys(roadGraph));
            let place;
            do {
                place = randomPick(Object.keys(roadGraph));
            } while (place == address);
            parcels.push({place, address});
        }
        return new VillageState("Post Office", parcels);
    };
}

module.exports.VillageState = VillageState;

// The robot is a function that takes a VillageState object
// and returns the name of a nearby place
// we want to pass them their memeory
// the robot returns an object with the direction it wants to move
// and a memory value that is given back the next time it is called
function runRobot(state, robot, memory = []) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(state.parcels)
        console.log(`Moved to ${action.direction}`);
    }
}

module.exports.runRobot = runRobot;
// Walk in a random direction every turn
// Eventually the robot's job will be complete
// this is highly inefficient

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

module.exports.randomPick = randomPick;

function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
}

module.exports.randomRobot = randomRobot;

// Run the BogoBot
// runRobot(VillageState.random(), randomRobot);

// Mail Route Robot
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"

];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return { direction: memory[0], memory: memory.slice(1)};
}

module.exports.routeRobot = routeRobot;

// runRobot(VillageState.random(), routeRobot);

// Pathfinding
// The robot should adjust its behavior to the work that needs to be done
// It should deliberately move toward a given parcel or 
// to where a parcel should be delivered
// this requires a route finding function

// paths through a grid is infinite
// we want a route from a to b
// we're only interested in routes that start with a
// grow routes from a starting point

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

module.exports.findRoute = findRoute;

function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

module.exports.goalOrientedRobot = goalOrientedRobot;

runRobot(VillageState.random(), goalOrientedRobot);
/*{
  "Alice's House": [ "Bob's House", 'Cabin', 'Post Office' ],
  "Bob's House": [ "Alice's House", 'Town Hall' ],
  Cabin: [ "Alice's House" ],
  'Post Office': [ "Alice's House", 'Marketplace' ],
  'Town Hall': [ "Bob's House", "Daria's House", 'Marketplace', 'Shop' ],
  "Daria's House": [ "Ernie's House", 'Town Hall' ],
  "Ernie's House": [ "Daria's House", "Grete's House" ],
  "Grete's House": [ "Ernie's House", 'Farm', 'Shop' ],
  Farm: [ "Grete's House", 'Marketplace' ],
  Shop: [ "Grete's House", 'Marketplace', 'Town Hall' ],
  Marketplace: [ 'Farm', 'Post Office', 'Shop', 'Town Hall' ]
} */