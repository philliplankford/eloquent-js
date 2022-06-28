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