const { Vector,
        Group, 
        GroupIterable,
        checkProperty } = require('./chapter-6-exercises');

// 6.1 Tests
describe("Vector Method Tests", () => {
    const vector = new Vector(1,2);
    test("plus returns vector with added points", () => {
        expect(vector.plus(new Vector(2,3))).toEqual({x: 3, y:5});
    });
    test("minus return vector with subtracted points", () => {
        expect(vector.minus(new Vector(2,3))).toEqual({x: -1, y: -1});
    });
    test("length returns distance from (0,0) origin", () => {
        expect(new Vector(3,4).length).toBe(5);
    });
});

// 6.1 Class Interface Testing + Jest Spy Exploration
describe("Vector Interface", () => {
    const vector = new Vector(1,1);
    test("object defined", () => { expect(vector).toEqual({x: 1, y: 1})});
    test("defines plus() as function", () => { expect(typeof vector.plus).toBe("function"); });
    test("defines minus() as function", () => { expect(typeof vector.minus).toBe("function"); });
});

describe("Vector SpyOn Tests", () => {
    const vector = new Vector(1,1);

    jest.clearAllMocks();
    
    test("Plus should be called once and return Vector {x: 2, y: 2}", () => {
        jest.spyOn(Vector.prototype, 'plus');
        vector.plus(new Vector(1,1));

        expect(Vector.prototype.plus).toHaveBeenCalledTimes(1);
        expect(Vector.prototype.plus).toHaveReturnedWith({x: 2, y: 2});
    });

    test("Minus should be called once and return Vector {x: 0, y: 0}", () => {
        // using variable assignment
        const minusSpy = jest.spyOn(Vector.prototype, 'minus');
        vector.minus(new Vector(1,1));

        expect(minusSpy).toHaveBeenCalledTimes(1);
        expect(minusSpy).toHaveReturnedWith({x: 0, y: 0});
    })
});

// 6.2 Tests
describe("Group Method Tests", () => {
    const group = Group.from([10, 20]);
    test("group from iterable should create a group", () => {
        expect(group).toEqual({"values": [10,20]});
    });

    test("add a value from the group if it doesn't already exist", () => {
        group.add(40);
        expect(group.has(40)).toBe(true);
        expect(group.add(40)).toBe(undefined);
    });

    test("detect if a group has a number already", () => {
        expect(group.has(10)).toBe(true);
        expect(group.has(30)).toBe(false);
    });

    test("delete a number from the group", () => {
        group.delete(10);
        expect(group.has(10)).toBe(false);
        expect(group.delete(10)).toBe(undefined);
    });
});

// 6.3 Tests
describe("Group Iterable Method Tests", () => {

    test("check that the next method iterates correctly", () => {
        const iterable = new GroupIterable(Group.from([10,20]));
        const none = new GroupIterable(Group.from([]));

        expect(iterable.next()).toEqual({value: 10, done: false});
        expect(none.next()).toEqual({done: true});
    });

    test("Symbol.iterator method", () => {
        const group = Group.from([10,20]);
        expect(group[Symbol.iterator]()).toEqual({inc: 0, group: {values: [10,20]}});
    });

    // Itegration Tests
    test("Iterates Over Group Successfully", () => {
        const consoleLog = jest.spyOn(console, "log");
        for (let value of Group.from(["a", "b", "c"])){
            console.log(value);
        }
        expect(consoleLog).toHaveBeenCalledTimes(3);
        expect(consoleLog).toHaveBeenCalledWith("a");
        expect(consoleLog).toHaveBeenCalledWith("b");
        expect(consoleLog).toHaveBeenCalledWith("c");
    });
});

// 6.4 Tests
describe("Use hasOwnProperty even if its defined in an object", () => {
    const map = { one: true, hasOwnProperty: true};

    test("hasOwnProperty returns true", () => {
        expect(checkProperty(map, "hasOwnProperty")).toBe(true);
    });
    test("checking property 'one' returns true", () => {
        expect(checkProperty(map, "one")).toBe(true);
    });
    test("checking unknown property return false", () => {
        expect(checkProperty(map, "yolo")).toBe(false);
    });
});