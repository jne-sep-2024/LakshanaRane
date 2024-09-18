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

// example-2


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
