let x = '10',
    y = '20';
let result = x + y;

console.log(result);

let result2 = '10'* 20;
console.log(result2);

//using arithematic operators on objects//
console.log("objects")
let energy = {
    valueOf() {
      return 100;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log(currentEnergy);
  
  currentEnergy = energy + 100;
  console.log(currentEnergy);
  
  currentEnergy = energy / 2;
  console.log(currentEnergy);
  
  currentEnergy = energy * 1.5;
  console.log(currentEnergy);
  

  let energy2={
    toString(){
        return 50;
    },
  };

  let energyVariable= energy2-10;
  console.log(energyVariable);

  energyVariable= energy2-10;
  console.log(energyVariable);
   energyVariable= energy2*10;
  console.log(energyVariable);
   energyVariable= energy2*1.5;
  console.log(energyVariable);


  //Remainder opeartor
  let remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1

let remainder2 = Infinity % 2;
console.log(remainder2); // NaN

let remainder3 = 10 % 0;
console.log(remainder3); // NaN


let remainder4 = 10 % Infinity;
console.log(remainder4); // 10

let remainder5 = '10' % 3;
console.log(remainder5); // 1

const isOdd = (num) => num % 2;


//assignment//
let counter = 0;
counter = counter + 1;


// unary
console.log("code goes here");
let x2=20;
let y2= -x;

console.log(y2)


//increement
let age = 25;
++age;

console.log(age); // 26

//decreement
let weight = 90;
--weight;

console.log(weight); // 89

let weight2 = 90;
weight2= --weight2 + 5;

console.log(weight2); // 94


//comparison//

let a = 10, 
    b = 20; 

console.log(a >= b);  // false
console.log(a == 10); // true

let name1 = 'alice',        //a=97
    name2 = 'bob';             


let results= name1<name2;
console.log('name1<name2 '+results);        //true  a<b
console.log(name1=='alice');

console.log(10 < '20'); // true     //Number() is used and string is converted into number

console.log(10 == '10'); // true


let f1 = 'apple',
    f2 = 'Banana';

let res = f2.toLowerCase() < f1.toLowerCase();
console.log(res); // false



//Comparing no object with object;
let apple={
    valueOf:function(){
        return 10;
    },
};

let orange={
    toString:function(){
        return '20';
    },
};

console.log(apple>10);      //10>10-->f

console.log(orange==20);    //20==20-->true
console.log(null==undefined);


//either value is NaN 
console.log(NaN == 1); // false
console.log(NaN=NaN);   //false

console.log(NaN != 1); // false
console.log(NaN!=NaN);

//strict equals
console.log("10" == 10); // true
console.log("10" === 10); // false

//logical operators

let eligible = false,
    required = true;

console.log(!eligible);
console.log(!required);



const formatCurrency = (amount, currency) => {
    return currency === '$' ?
      `$${amount}`: `${amount} ${currency}`;
 }
 
 formatCurrency(100,'$'); // $100


 const log = (message) => {
    const time = (new Date()).toLocaleTimeString();
    console.log(`${time}: ${message}`);
  };
  
  const r1 = log('Hi');
  console.log(r1); // undefined


//or
console.log(eligible || required); // false

//or chaining

let valueResults = value1 || value2 || value3;

/*
precedance:
Logical NOT (!)
Logical AND (&&)
Logical OR (||)
*/

//Logical assignment operator//



//logical or
let title = 'JavaScript Awesome';
title ||= 'untitled';

console.log(title);

let person = {
    firstName: 'Jane',
    lastName: 'Doe',
};


//logical and
person.lastName &&= 'Smith';

console.log(person);


