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

exports.range = range;

function sum(array) {
    let culm = 0;
    for (let i = 0; i < array.length; i++) {
        culm += array[i];
    }
    return culm;
}

exports.sum = sum;

/* // 4.1 Solution
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
*/

// Excercise 4.2 - Reversing an Array

// produces new array
function reverseArray(array) {
    const reverse = [];
    for(let i = array.length - 1; i >= 0; i--){
        reverse.push(array[i]);
    }
    return reverse;
}

exports.reverseArray = reverseArray;

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

exports.reverseArrayInPlace = reverseArrayInPlace;

/* // 4.2 Solution
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
*/

// Exercise 4.3 - A List