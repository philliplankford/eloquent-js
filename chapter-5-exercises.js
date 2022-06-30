// Exercise 5.1 - Flattening

// Flatten an array of arrays to a single array
function flatten(array) {
    return array.reduce( (prev, current) => [...prev, ...current] );
}

exports.flatten = flatten;

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

exports.loop = loop;

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

exports.everyLoop = everyLoop;

// using some
function everySome(array, condition) {
    // De Morgan's laws
    // a && b equals !(!a || !b)
    return !array.some(element => !condition(element));
};

exports.everySome = everySome;    