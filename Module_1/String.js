let mesage = `"I'm good". She said"`;

let name = 'John';
let message = `Hi, I'm ${name}.`;

console.log(message);

let str1 = 'I\'m a string!';

let str = "Good Morning!";
console.log(str.length);  // 131

//accesing chars
let str2="Thinkitive";
console.log(str2.charAt(3));


let str4 = "Hello";
console.log(str[0]); // "H" = "Hello";
console.log(str[0]); // "H"

let str3= "Hello";
console.log(str[str.length -1]); // "o"

//concatenation//
let name2 = 'John';
let string = 'Hello ' + name2;

console.log(str); // "Hello John"

let button="btn";
button+="btn-primary";
button+="none";

//Converting values to string
//casting non boolean value to boolean value
let status=false;
let statusString=status.toString();
let back=Boolean(statusString);

//comparng string
let result = 'a' < 'b';
console.log(result); // true

//string practice
console.log('................................................................');


let myStr1= new String('hello');
let myStr2='hello';
let myStr3= new String('hello');

// '==' ye value ko coerse krne ki koshish karta h check karta h values same h ya nahi to true retuen karegea
//loose equals

console.log('result-1 for ==')
console.log(myStr1==myStr2);        //true      -->== try karega ki myStr1 ko primitive m convert marke value check kare
console.log(myStr1==myStr3);        //false  --> isme dono instances alag h so isiliye false

console.log('result-2 for ===')
console.log(myStr1===myStr2);   //false        --> isme ek object ka istnace h aur ek primitive string h so strictly not equals
console.log(myStr1===myStr3);   //false      --> isme dono instances alag h so isiliye false
