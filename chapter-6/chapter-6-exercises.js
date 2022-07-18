// Exercise 6.1 - A Vector Type
// write a Vector class that takes x and y
// define two methods, plus and minus that take a vector
// and return a new vector with the points added or subtracted
// add a getter property that finds the points distance from (0,0)

class Vector {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        const newX = this.x + vector.x;
        const newY = this.y + vector.y;

        return new Vector(newX, newY);
    }

    minus(vector) {
        const newX = this.x - vector.x;
        const newY = this.y - vector.y;

        return new Vector(newX, newY);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

module.exports.Vector = Vector;

// Exercise 6.2 - Groups
// Make a group class that has add, delete, and has methods
// this class will emulate a set
// make a static from method that takes an iterable and makes a group

class Group {
    constructor() {
        this.values = [];
    };

    add(value) {
        if (!this.values.includes(value)) {this.values.push(value);};
    };

    delete(value) {
        if (this.values.includes(value)) {
            this.values = this.values.filter( each => each !== value);
        };
    };

    has(value) { return this.values.includes(value); };

    static from(iterable) { 
        const group = new Group();
        iterable.forEach(val => group.add(val));
        return group;
    };

    [Symbol.iterator]() {
        return new GroupIterable(this);
    }
};

module.exports.Group = Group;

// Exercise 6.3 - Iterable Groups
// Make the Group class from 6.2 Iterable
// without calling Symbol.iterator on the array

class GroupIterable {
    constructor(group) {
        this.inc = 0;
        this.group = group;
    }

    next() {
        if (this.inc == this.group.values.length) return {done: true};

        let value = this.group.values[this.inc];

        this.inc++;

        return {value, done: false};
    }
};

module.exports.GroupIterable = GroupIterable;