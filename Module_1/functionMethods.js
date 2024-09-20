// this.name = "Oracle";       
// var website = {  
//   name: "MYWEBSITE",  
//   getName: function() { return this.name; }  
// };  
  
// document.writeln(website.getName()); // MYWEBSITe

// var output= website.getName;
// document.writeln(output);     //Oracle->global name

// const boundGetName = output.bind(website);

// document.writeln(boundGetName());
  
// // Using bind allows you to explicitly set the context of this, ensuring the function behaves as expected.

let person = {
  firstName: "Lakshana", 
  lastName: 'Rane',
  //  getFullName : function(hometown, state) {
  //   console.log(this.firstName + " " + this.lastName + " from " + hometown + ', ' + state);
  // }
};

let getFullName = function(hometown, state) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + ', ' + state);
};

let name2 = {
  firstName: 'John', 
  lastName: 'Doe'
};

// Using call to borrow the function
getFullName.call(name2, "Jaipur", "Rajasthan");

// Using apply to borrow the function with an array of arguments
getFullName.apply(name2, ["Mumbai", "Maharashtra"]);

//bind
let printGetFullName= getFullName.bind(name2,"Kolkata","WestBengal"); 
//this will return the new method jisme name2 wale object ke sath getFullName method bind hoke aayega
//hum ye baad me call kar akte hai, directly call nahi hota ai ,, pehle bind hoga fir call hoag
console.log(printGetFullName);
printGetFullName()


//usage: gives you a copy that you can call later 