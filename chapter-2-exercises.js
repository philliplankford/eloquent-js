// Exercise 2.1 - Build a Triangle
// my answer
function buildTriangle(){
    let line = '';
    for (let i = 0; i < 7; i++) {
        line += '#';
        console.log(line);
    }
    return line;
}

exports.buildTriangle = buildTriangle;

/* // 2.1 Solution
function solutionTriangle() {
    for (let line = "#"; line.length < 8; line += "#") { console.log(line); }
}
*/

// Exercise 2.2 - FizzBuzz
// print Fizz if divisible by 3 
// print Buzz if divisible by 5 
// if both print FizzBuzz else print the integer

function fizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
        if (!(i % 3) && !(i % 5)) {
            console.log("FizzBuzz");
            continue;
        } else if (!(i % 3)) {
            console.log("Fizz");
            continue;
        } else if (!(i % 5)) {
            console.log("Buzz");
            continue;
        }
        console.log(i);
    }
}

exports.fizzBuzz = fizzBuzz;

/* // 2.2 Solution
function solutionFizzBuzz() {
    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
    }
}
*/

// Exercise 2.3 - Make a Chess Board
function chessBoard(size) {
    let board = '';
    let tile = false;

    for (let i = 0; i < size; i++) {
        for (let n = 0; n < size; n++) {
            if (!tile) {
                board += ' ';
            } else {
                board += '#';
            } 
            tile = !tile;
        }
        board += '\n';
        tile = !tile;
    }
    console.log(board);
    return board;
}

exports.chessBoard = chessBoard;

/* //2.3 Solution
function solutionChessBoard() {
    let size = 8;

    let board = "";

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }

    console.log(board);
}
*/

/* //Recursion example
// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         } else if (current > target) {
//             console.log(history);
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) ||
//                    find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, "1");
// }

*/