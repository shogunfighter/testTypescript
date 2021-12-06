// TUTORIAL: by Traversy
// Refresh about typescript
// https://www.youtube.com/watch?v=BCg4U1FzODs

let id: number = 5;
let myname: string = 'rene';
let real: boolean = false;
let obj: any = {'a': 1};

let ids: number[] = [1,2,3,4,5];

// tuple
let tuple1: [number, string, boolean] = [1,'a',true];

// tuple array
let tupleArr: [number, string][];
    tupleArr = [
        [1,'a'],
        [2,'b']
    ];

// enum
enum Direction {
    Up,
    Down,
    Left,
    Right
};

console.log("Direction.Up:",Direction.Up);
console.log("Direction.Down:",Direction.Down);
console.log("Direction.Left:",Direction.Left);
console.log("Direction.Right:",Direction.Right);

// In Java, `type` are like Abstract
// Java also has interfaces, which is similar to typescript

// Object
type User = {
    name: string,
    age: number
};

const user1: User = {
    name: 'rene',
    age: 23
};

console.log(user1);

// Functions
function addNum(x:number, y:number): number {
    return x+y;
}


// void

function log(message: number | string) : void {
    console.log(message);
}

// log(true); //this will fail because we only let types: number|string

// Interface
interface MathFunc {
    (x: number, y: number) : number
}
const add: MathFunc = (x: number, y: number) => x + y;
const sub: MathFunc = (x: number, y: number) => x - y;

// Classes

interface PersonInterface {
    id: number;
    name: string;
    register():string;
}

class Person implements PersonInterface{
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}

const brad = new Person(1, 'brad');
const mike = new Person(2, 'mike');


console.log(brad, mike);

// Extending Classes

class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position:string) {
        super(id, name);
        this.position = position;
    }
};

let rene:Employee = new Employee(4, "rene", "developer");

console.log(rene);


// id = '5';
// alert("id:" + id);