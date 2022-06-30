// Exercise 3.1 - Find the Minimum
// write a function that returns the minimum of two arguments
function min(num1, num2){
    return Math.min(num1, num2);
};

module.exports.min = min;

/* // 3.1 Solution 
function min(a, b) {
    if ( a < b) return a;
    else return b;
}
*/

// Exercise 3.2 - Recursion
// use a recursive function to determine if a number is even or odd
function isEven(num){
    if (num == 0) { return true; }
    else if (num == 1) { return false; }
    else if (num < 0) { return isEven(-num) }
    else { return isEven(num - 2); }
};

module.exports.isEven = isEven;

/* // 3.2 Recursion Solution 
function isEven(n){
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
};
*/

// Exercise 3.3 - Bean Counting
// 1. write a function that counts the number of B characters
// 2. write a countChar function that counts any specified character
function countChar(string, character){
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) { count++; }
    }
    return count;
}

function countBs(string){
    return countChar(string, "B");
};

module.exports.countChar = countChar;
module.exports.countBs = countBs;

/* // 3.3 Solution
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
*/