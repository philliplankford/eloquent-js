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
}

module.exports.VillageState = VillageState;