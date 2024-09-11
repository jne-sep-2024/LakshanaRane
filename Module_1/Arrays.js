let scores= new Array();//empty


let nonEmptyAray=new Array(10);
console.log(nonEmptyAray.length);


let elements=new Array(0,2,3,5,20);
console.log(elements);

let athletes = new Array(3); // creates an array with initial size 3
let scores2 = new Array(1, 2, 3); // create an array with three numbers 1,2 3
let signs = new Array('Red'); // creates an array with one element 'Red'

let colors = ['red', 'green', 'blue'];

let emptyArray = [];


let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];

console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

mountains[2] = 'K2';

console.log(mountains);
console.log(mountains.length);


//Basic operations on Array//

//Add->push
let seas=['narmada','ganga','godavari','Kaveri','tapi'];
seas.push('Mula-Mutha');
console.log(seas);      //'narmada','ganga','godavari','Kaveri','tapi,'Mula-Mutha'

//adding element to the first position of array
seas.unshift('yamuna');   //-->'','narmada','ganga','godavari','Kaveri','tapi
console.log(seas);

seas.pop();
console.log(seas);

//removing element form beginning of array
seas.shift();
console.log(seas);

//finding index
// let index = seas.indexOf('North Sea');//not presetn -1

console.log(index); // 2

//
console.log(Array.isArray(seas)); // true

