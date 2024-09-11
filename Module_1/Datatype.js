let counter = 120;
console.log(typeof(counter)); // "number"

counter = false; 
console.log(typeof(counter)); // "boolean"

counter = "Hi";
console.log(typeof(counter)); // "string"


let counter1;
console.log(counter1);        // undefined
console.log(typeof counter1); // undefined


let obj = null;
console.log(typeof obj); // object


console.log(null == undefined); // true


console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log('a'/2); // NaN;

console.log(NaN/2); // NaN
console.log(NaN == NaN); // false



let message = ' I\' m also a valid string'; // use \ to escape the single quote (')

let str = 'JavaScript';
str = str + ' String';


let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false

/*Some more datatypes */

//Symbol type//
let s1 = Symbol();
console.log(Symbol()==Symbol());            //evrytime function craetes a new value



//bigint//
let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'



//object//
let empltyobject={};

let person={
    firtsName:"John",
    lastName: "Doe"
}

let contact={
    firstName:'John',
    lastName:'Doe',
    email:'johndoe@mail.com',
    phone:327862123,
    address:{
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

console.log(contact.firstName);
console.log(contact.lastName);



//deleting property form object
// delete objectName.propertyName;
// delete person.age;