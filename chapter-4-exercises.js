// Exercise 4.1 - The Sum of a Range
function range(start, end, step = start < end ? 1 : -1) {
    const rangeArr = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) { rangeArr.push(i); } 
    } else {
        for (let i = start; i >= end; i += step) { rangeArr.push(i); } 
    }
    return rangeArr;
}

module.exports.range = range;

function sum(array) {
    let culm = 0;
    for (let i = 0; i < array.length; i++) {
        culm += array[i];
    }
    return culm;
}

module.exports.sum = sum;

// Excercise 4.2 - Reversing an Array

// produces new array
function reverseArray(array) {
    const reverse = [];
    for(let i = array.length - 1; i >= 0; i--){
        reverse.push(array[i]);
    }
    return reverse;
}

module.exports.reverseArray = reverseArray;

// modifies given array
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        const back = array[array.length - (i + 1)];
        const front = array[i];
        array[i] = back;
        array[array.length - (i + 1)] = front;
    }
    return array;
}

module.exports.reverseArrayInPlace = reverseArrayInPlace;

// Exercise 4.3 - A List
function arrayToList(array) {
    if (array.length > 0) {
        return {
            value: array.shift(),
            rest: arrayToList(array)
        }
    } else { return null; }
}

module.exports.arrayToList = arrayToList;

function listToArray(list) {
    let array = [];
    for (let obj = list; obj; obj = obj.rest) {
      array.push(obj.value);
    }
    return array;
}

module.exports.listToArray = listToArray;

function prepend(element, list) {
    return { value: element, rest: list };
}

module.exports.prepend = prepend;

function nth(list, num) {
    if (num === 0) return list;
    if (!list) return undefined;
    return nth(list.rest, num - 1);
}

module.exports.nth = nth;

// Exercise 4.4 - Deep Comparison
function deepEqual(val1, val2){

    if (val1 === val2) return true;
    if (val1 === null || val2 === null) return false;
    if (typeof val1 === "object" && typeof val2 === "object") {
        const keys1 = Object.keys(val1);
        const keys2 = Object.keys(val2);
        if (keys1.length === keys2.length) {
            for (let i = 0; i < keys1.length; i++) {
                if (keys1[i] !== keys2[i]) return false;
                if (!deepEqual(val1[keys1[i]], val2[keys2[i]])) return false;
            }
            return true;
        } else { return false; }
    }
    return false;

}

module.exports.deepEqual = deepEqual;