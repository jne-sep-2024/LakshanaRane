//Js has 2 types of values:
//Reference Value
//Primitive value
/*
Static data is the data whose size is fixed at compile time. Static data includes:

Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)
Reference values that refer to objects.*/

let name = 'John';
let age = 25;

let person = {      //ref stack pr hoga and object heap pr banega, same jaise java, c++ m hota hai
  name: 'John',
  age: 25,
}
  // add the ssn property
  person.ssn = '123-45-6789';
  
  // change the name
  person.name = 'John Doe';
  
  // delete the age property
  delete person.age;
  
  
  console.log(person);


//   let age = 25;
let newAge = age;


newAge = newAge + 1;
console.log(age, newAge);

//Just like copy constructors , that i learnt in c++,
//when we assign a refernce to another variable, it will also point to same object so 
//if we made chnags to member it will reflect to person object refernce 

  
  let member = person;
  
  member.age = 26;
  
  console.log(person);
  console.log(member);