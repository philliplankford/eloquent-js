// Exercise 5.1 - Flattening

// Flatten an array of arrays to a single array
function flatten(array) {
    return array.reduce( (prev, current) => [...prev, ...current] );
}

module.exports.flatten = flatten;

// Exercise 5.2 - Your Own Loop
// write higher-order function
// arguments: value, test function, update function, body function

function loop(val, testFunc, updateFunc, bodyFunc) {
    // run test function on current loop value. Stop if returns false
    // Call the body function giving it the current value
    // Call the update function to create a new value and starts from the beginning
    if (!testFunc(val)) return false;
    bodyFunc(val);
    loop(updateFunc(val), testFunc, updateFunc, bodyFunc);
    // Book Solution 8ms faster
    // for (let value = start; testFunc(value); value = updateFunc(value)) {
    //     bodyFunc(value);
    //   }
}

module.exports.loop = loop;

// Exercise 5.3 - Everything
// Array's have an every method 
// returns true when given function returns true for every element in the array
// Some is || that acts on arrays 
// Every is the && that acts on arrays

// using loop 
function everyLoop(array, condition) {
    for(let i = 0; i < array.length; i++) {
        if(!condition(array[i])) return false;
    }
    return true;
};

module.exports.everyLoop = everyLoop;

// using some
function everySome(array, condition) {
    // De Morgan's laws
    // a && b equals !(!a || !b)
    return !array.some(element => !condition(element));
};

module.exports.everySome = everySome;

// Exercise 5.4 - Dominant Writing Direction

const { SCRIPTS } = require("./chapter-5-scripts");

function dominantDirection(string){
    // we have to loop through each character of the string 
    // check its code against SCRIPT 
    // return its writing direction
    // calculate which writing direction is dominant
    const counted = countGroups(string, char => {
        let dir = characterDirection(char);
        return dir ? dir : "none";
    }).filter(({name}) => name != "none");

    if (!counted.length) return "ltr";

    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

module.exports.dominantDirection = dominantDirection;

function characterDirection(char){
    let code = char.codePointAt(0);
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) { return script.direction }
    }
    return null;
}

module.exports.characterDirection = characterDirection;

function countGroups(items, groupName) {
    const count = [];
    for (let item of items) {
        const name = groupName(item);
        const known = count.findIndex(c => c.name == name);
        if (known == -1) {
            count.push({name, count: 1});
        } else { count[known].count++; }
    }
    return count;
}

module.exports.countGroups = countGroups;