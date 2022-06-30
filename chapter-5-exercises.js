// Exercise 5.1 - Flattening
// Flatten an array of arrays to a single array
function flatten(array) {
    return array.reduce( (prev, current) => [...prev, ...current] );
}

exports.flatten = flatten;