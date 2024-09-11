//object//


//An object is a collection of key-value pairs.


let empltyobject={};

let person={
    firtsName:"John",
    lastName: "Doe"
}

let contact={
    firstName:'John',
    lastName:'Doe',
    email:'johndoe@mail.com',
    phone:327862123,
    age:25,
    address:{
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

console.log(contact.firstName);
console.log(contact.lastName);



//deleting property form object
// delete objectName.propertyName;
delete person.age;  //true

//check if property exists
// propertyName in objectName