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