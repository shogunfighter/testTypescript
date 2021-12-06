"use strict";
// TUTORIAL
// https://www.youtube.com/watch?v=BCg4U1FzODs
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
var myname = 'rene';
var real = false;
var obj = { 'a': 1 };
var ids = [1, 2, 3, 4, 5];
// tuple
var tuple1 = [1, 'a', true];
// tuple array
var tupleArr;
tupleArr = [
    [1, 'a'],
    [2, 'b']
];
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
;
console.log("Direction.Up:", Direction.Up);
console.log("Direction.Down:", Direction.Down);
console.log("Direction.Left:", Direction.Left);
console.log("Direction.Right:", Direction.Right);
var user1 = {
    name: 'rene',
    age: 23
};
console.log(user1);
// Functions
function addNum(x, y) {
    return x + y;
}
// void
function log(message) {
    console.log(message);
}
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered.");
    };
    return Person;
}());
var brad = new Person(1, 'brad');
var mike = new Person(2, 'mike');
console.log(brad, mike);
// Extending Classes
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
;
var rene = new Employee(4, "rene", "developer");
console.log(rene);
// id = '5';
// alert("id:" + id);
