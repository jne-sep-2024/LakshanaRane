
// calculate(num1,num2,anonymous function);
const calculate=(a,b,operation)=>{
    return operation(a,b);

}

//method 1
//define fucntions directly on the time of passing itslef as an argument

const res= calculate(3,4,function(num1,num2){
    return num1+num2;
})
console.log(res);

//method 2
//arrow fucntion and then pass it 
const subtraction=(a,b)=>a-b;

const subresult= calculate(8,3,subtraction);
console.log(subresult);


//method 3
//defining function and then passing it

function multiply(a,b){
    return a*b;

}

const multiplyResult=calculate(3,4,multiply);
console.log(multiplyResult);

//arrayCallBack fucntions//
const a=[3,-5,5,3,42,-6,-2,0];

const firstNegitiveNumber=(num)=>{
    return num<0;
} 

const result=a.find(firstNegitiveNumber);
console.log(result);


const res1=a.findIndex(firstNegitiveNumber);
console.log(res1);


a.forEach((num,i)=>{
    console.log("array element: "+num,i);
})

// a.map(()=>{

// })
// a.filter(()=>
// {

// })



function getNames() {
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';
  
    // return values
    return {
      'firstName': firstName,
      'lastName': lastName
    };
  }
  console.log(getNames);

/*In a nutshell*/

  //returning multiple values form a function using array

  function getNames() {
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';

    // return as an array
    return [firstName, lastName];
}

//returning multiple values form a function using object

function getNames() {
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';

    // return as an object
    return {
        'firstName':this.firstName, 
        'lastName' : this.lastName
    }
}