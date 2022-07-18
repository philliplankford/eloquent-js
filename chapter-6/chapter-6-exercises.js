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