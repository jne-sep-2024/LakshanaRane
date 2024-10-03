//Tuples are with fixed length and order , datatypes can be heterogeneuos

// const tuple : (string |number)[]=[1,"Laksh"];
const tuple : (string |number)[]=["Laksh",1];

let userTuple:[string, number,boolean];

userTuple=['lr',23,true]
// userTuple=['lr',true,23 ]        not allowed

let  rgb: [number,number,number]=[1223,23,122];

type User=[number,string];

const newUser : User=[562,'laksh'];
console.log(newUser);


// newUser.push(true);  not allowed
