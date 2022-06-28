// Exercise 4.1 The Sum of a Range
function range(start, end, step = 1) {
    let array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) { array.push(i); }
    } else {
        for (let i = start; i >= end; i += step) { array.push(i); }
    }
    return array;
}

function sum(arr) {
    return arr.reduce((prev, current) => prev + current, 0);
}

// 4.1 Solution

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

  // excercise 4.2 reversing an Array 
function reverseArray(array) {
    let newArray = [];
    while (array.length > 0) { newArray.push(array.pop()); }
    return  newArray;
}

// function reverseArrayInPlace(array) {
//     let start = array[0];
//     while (array[0] === start) {
//         array.push(array.shift());
//     }
// }

// 4.2 Solutions
function reverseArraySolution(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlaceSolution(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
}

// Excercise 4.3 A List 
/* 
const list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3, 
            rest: {

            }
        }
    }
};
*/

function arrayToList(array){
    if (array.length > 0) {
        return {
            value: array.shift(),
            rest: arrayToList(array)
        }
    }
}

function listToArray(list){
    if (list) { 
        console.log(list.value);
        listToArray(list.rest);
    }
}

function prepend(list, element) {
    return {
        value: element,
        rest: list
    }
}

function nth(list, number) {
    if (count == number) {
        return list;
    } else { 
        let count = 0;
        return nth(list.rest, count)
    }

}

console.log(prepend(arrayToList([1,2,3]),-1));
// listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: {}}}});

// Solutions to 4.3
function arrayToListSolution(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArraySolution(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prependSolution(value, list) {
  return {value, rest: list};
}

function nthSolution(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

// Excercise 4.4
// Deep Comparison
function deepEqual(value1, value2) {
    if (value1 === value2) { return true; }

    if (value1 == null || typeof value1 != "object" || value2 == null || typeof value2 != "object") return false;
    
    else {
        if (!Object.keys(value1) && !Object.keys(value2)) { return true }
        if (Object.keys(value1)[0] == Object.keys(value2)[0]) return deepEqual(Object.keys(value1), Object.keys(value2));
        else return false;
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true