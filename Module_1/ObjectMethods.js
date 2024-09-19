car={
    name:'Thar',
    price:'10000000',
    country:'UK',
    greet:function(){
        console.log("Hello, gud morning!");

    },
    getFullname: function(){
        return this.name + ' ' + this.price + ' '+ this.country;
    }
}
console.log(car.getFullname());

//Add property

car.yearOfMan=2023;
car.engineType="ICE";
console.log(car)


//delete property

// delete car.yearOfMan;
// console.log(car)


//check properties

let res=car.hasOwnProperty('greet');

console.log(res);


//method using es6
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  console.log(person.fullName()); // John Doe
  
  //getting keys:
  console.log(Object.keys(person));

  //getting values:
  console.log(Object.values(person));

  //getting entries:
  console.log(Object.entries(person));


  //assign/merge


  const additionalInfo={
    age:30,
    address:'mumbai'
  }
//   const updatedPerson= Object.assign(person,additionalInfo);
  console.log(Object.assign(person,additionalInfo));

  //freeze()

  Object.freeze(person);

  person.firstName="Laksh";     //this wont change the value now
  console.log(person.firstName)


  Object.seal(person);
  person.contact='222-436829';      //trying to add new property but sealed h toh nahi hoga

delete person.age       //delete bhi nahi hoga 
  console.log(Object.entries(person));


  //inheritance:


//   function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   Person.prototype.fullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };
  
//   function Employee(firstName, lastName, position) {
//     Person.call(this, firstName, lastName); // Call parent constructor
//     this.position = position;
//   }
  

  
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
  };
  
  function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor
    this.breed = breed;
  }
  
  // Set up inheritance
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    console.log(`${this.name} is barking.`);
  };
  
  const myDog = new Dog('Rex', 'German Shepherd');
  myDog.eat(); // Output: Rex is eating.
  myDog.bark(); // Output: Rex is barking.
  
