// Exercise 8.1 - Retry
// you have a function primitiveMultiply
// 20% of the time it multiplies 2 numbers
// 80% of the time is raises the exception "MultiplicatorUnitFailure"
// write a function that wraps this function and keeps calling it until it succeeds
// return the result

class MultiplicatorUnitFailure extends Error {};

module.exports.MultiplicatorUnitFailure = MultiplicatorUnitFailure;

function randomRange(min, max) {
    return Math.floor(Math.random() * max) + min;
}

module.exports.randomRange = randomRange;

function primitiveMultiply(num1, num2) {
    const roll = randomRange(1,100);
    if (roll <= 20) return num1 * num2
    throw new MultiplicatorUnitFailure("Multiplication failed. 20% chance of success.");
}

module.exports.primitiveMultiply = primitiveMultiply;

/* LOOP
for (;;) {    
    try {
        primitiveMultiply(2,5);
        break;
    } catch (error) {
        if (error instanceof MultiplicatorUnitFailure) { console.log(error.message); }
        else { throw error; }
    } 
}
*/

// Exercise 8.2 - The Locked Box
// consider this box with a lock
// you can only get to the content if its unlocked
// you cannot directly access the private _content
// write a function called withBoxUnlocked.
// It takes a function as an argument, unlocks the box, runs the function
// ensure the box is locked again before returning
// regardless if the function returned normally or threw an exception
// Extra points: if you call withBoxUnlocked when the box is unlocked 
// the box stays unlocked

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content(){
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

module.exports.box = box;

function withBoxUnlocked(body) {
    // your code here
    if (!box.locked) return body();

    box.unlock();
    try {
        return body();
    } catch(error) {
        console.log(error.message);
    } finally {
        box.lock();
    }
}

module.exports.withBoxUnlocked = withBoxUnlocked;

withBoxUnlocked(function(){ box.content.push("gold piece"); });

try {
    withBoxUnlocked(function(){ 
        throw new Error("Pirates on the horizon! Abort!");
    })
} catch (error) {
    console.log("Error raised:", error);
}

console.log(box.locked);

/* SOLUTION
    // Bonus
    let locked = box.locked;
    if (!locked) {
        return body();
    }
    
    // Solution
    box.unlock();
    try {
        return body();
    } finally {
        box.lock();
    }
*/