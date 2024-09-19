/*Hoisting ka matlab hai ki JavaScript apne code ko execute karne se pehle, 
 variable aur function declarations ko automatically upar le jaata hai.
 */

//1)variable hoisting

console.log(a);
var a=0;        //undefined
 

console.log(myletVaribale);
let myletVaribale='this is let variable';


// let aur const ke sath, hoisting ke bawajood, variables ko unki declaration ke
//  pehle access nahi kiya ja sakta. Ye time period ko "Temporal Dead Zone" kehte hain.


//2)function hoisting

 
sayHello();  // Output: Hello, world!

function sayHello() {
  console.log('Hello, world!');
}
