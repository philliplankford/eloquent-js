/* istanbul ignore file */

// Anonymous Closure
// Example 1
const globalVariable = "Mr. Worldwide!";

(function(){
    const string = "hello world!";
    console.log(string);
    console.log(globalVariable);
}());

// Global Import
// Example 2
/*
(function(globalVariable){
    const privateFunction = function() {
        console.log('Private.')
    }

    // The below methods are exposed
    // via the globalVariable interface.
    // It hides the method implementation in the
    // function block

    globalVariable.testFunction = function(string) {
        console.log(string);
    }


}(globalVariable));
*/
// Object Interface
// Example 3
// Create modules with self-contained object interfaces.
const myGradesCalc = (function(){
    // private
    const myGrades = [93,95,88,0,55,91];
    // expose below functions through an interface
    // implementation of the module is hidden in the 
    // function() block

    return {
        average: function() {
            const total = myGrades.reduce(function(acc, item){
                return acc + item;
            }, 0);

            return "Your average grade is " + total / myGrades.length + '.';
        },

        failing: function() {
            const failingGrades = myGrades.filter(function(item) { 
                return item < 70;
            });

            return "You failed " + failingGrades.length + ' times.';
        }
    }
}());

console.log(myGradesCalc.failing());
console.log(myGradesCalc.average());

// My own example
const myBank = (function(){
    let account = {
        name: "Personal",
        balance: 500
    };

    return {
        withdraw: function(amount){
            account.balance -= amount;
            console.log(`Withdrew $${amount} from account named ${account.name}.`);
            console.log(`New balance for account named ${account.name} is $${account.balance}`);
        },
        deposit: function(amount){
            account.balance += amount;
            console.log(`Deposited $${amount} into account named ${account.name}.`);
            console.log(`New balance for account named ${account.name} is $${account.balance}`);
        }
    }
}());

myBank.withdraw(200);
myBank.deposit(1000);

// Revealing Module Pattern
// Example 4
const myGradesCalc2 = (function(){
    const myGrades = [93,95,88,0,55,91];

    const average = function(){
        const total = myGrades.reduce(function(acc,item){
            return acc + item;
        },0);

        return `You average grade is ${ total / myGrades.length }.`
    }

    // we explicitly state what we want to reveal
    return {
        average
    }
}());

console.log(myGradesCalc2.average());
// I don't quite understand the comma idea
// 0,function foo () {console.log("works");};

// FunctionDeclaration Grammar
// function Identifier ( FormalParameterListopt ) { FunctionBody }

// FunctionExpression Grammar
// function Identifieropt (FormalParameterListopt ) { FunctionBody }

// function(){}();
// The above code is taken as a function declaration.
// A function declaration must always have a name identifier.


// Wrap the function in parenthesis
// (function(){}());
// The above code is evaluated as a function expression.

// The parenthesis is called the Grouping Operator
// It can only surround expressions
// So a function expression will be evaluated


// Functions inside blocks should be avoided
// It creates unpredictable behavior

if (true) {
    function foo() {
        console.log("true");
    }
} else {
    function foo() {
        console.log("false!");
    }
}

foo(); // what will this evaluate to?

// supposedly most implementations will take the second function
// Mozilla implementations
// functions are evaluated at run-time not parse-time


// UMD 
/*
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
      define(['myModule', 'myOtherModule'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
      module.exports = factory(require('myModule'), require('myOtherModule'));
    } else {
      // Browser globals (Note: root is window)
      root.returnExports = factory(root.myModule, root.myOtherModule);
    }
  }(this, function (myModule, myOtherModule) {
    // Methods
    function notHelloOrGoodbye(){}; // A private method
    function hello(){}; // A public method because it's returned (see below)
    function goodbye(){}; // A public method because it's returned (see below)
  
    // Exposed public methods
    return {
        hello: hello,
        goodbye: goodbye
    }
  }));
  */
  // CommonJs Copy
  // lib/counter.js
/* START
var counter = 1;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

module.exports = {
  counter: counter,
  increment: increment,
  decrement: decrement
};


// src/main.js

var counter = require('../../lib/counter');

counter.increment();
console.log(counter.counter); // 1

// ES6
// lib/counter.js
export let counter = 1;

export function increment() {
  counter++;
}

export function decrement() {
  counter--;
}


// src/main.js
import * as counter from '../../counter';

console.log(counter.counter); // 1
counter.increment();
console.log(counter.counter); // 2
*/