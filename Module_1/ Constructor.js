class Person{
    Person(firstName, lastName) {
       this.firstName = firstName;
       this.lastName = lastName;
   }
   
}
let person = new Person('John','doe');

console.log(person);



// function Person2(firstName, lastName) {
//     if (!new.target) {
//         throw Error("Cannot be called without the new keyword");
//     }

//     this.firstName = firstName;
//     this.lastName = lastName;
// }

class Student{
   constructor(fn,ln){
       this.firstName=fn;
       this.lastName=ln;
   }
   getFullName(){
       return this.firstName+ ' ' +this.lastName;

       
   }

}

let s1 = new Student('John', 'Doe');
let s2 = new Student('Jane', 'Doe');

console.log(s1.getFullName());
console.log(s2.getFullName());