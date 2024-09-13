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
