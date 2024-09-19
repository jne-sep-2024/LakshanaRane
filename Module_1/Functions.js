function say(message)
{
     console.log(message);
}

let rsult=say('hello');
console.log(rsult);

//fucntions with params and returns
function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}

//function with return type without params

function add(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    console.log(sum);
}

//fnuction with return type

function isValidEmail(email){
    return (email.includes('@'))? true:false;
}

console.log(isValidEmail('abc@mail.com'));

//fucntion hoisting
sayHello();

function sayHello(){
    console.log("hie");
    
}

//functions-> passing functions as an argument


function fn(a,b){
     return a+b;
}

function avg(a,b,fn){
    return fn(a,b)/2;
}
let res=avg(10,20,fn);
console.log(res);   

function fun2(propertyName){
     let res= function compare(a,b){
         return (a>b)? a : b;
    }
    return res;
}

let result=fun2;
console.log(result);

//Anonymous fucntions

const sayHi = function(){
    console.log("hello thinktives");
}

sayHi();

setTimeout(() =>{
    console.log('hello thinkitives');

}, 2000);

let person={
    firstName:"Lakshana",
    lastname:"rane"
};
(function(){
    console.log(person.firstName+ person.lastname);

})(person); 

//Arrow Functions

//ex1
let show=()=>
{
    console.log('thinkitive');
}

//ex2
let add1=(a,b)=>  a+b;

console.log(add1(10,20));


// ex-3
function Counter() {
    this.count = 0;
    
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
  
  const myCounter = new Counter(); // Prints incrementing count every second
  

//Pass by Value;


let person1={
    name:"lakshh",
    age:23
}

function increaseAge(obj){
    obj.age+=1;
}

increaseAge(person1);
console.log(person1);

//recursive functions

function numberMinus(x){
    console.log(x);
    // let next=x-1;

    while(x>0){
        numberMinus(x-1);
    }
}
numberMinus(10);


